<?php
/**
 * Created by PhpStorm.
 * User: ecodev03
 * Date: 2017/07/18
 * Time: 18:28
 */

require_once(realpath(__DIR__) . "./vendor/autoload.php");

$client = new Goutte\Client();
$client->setClient(new \GuzzleHttp\Client([
  \GuzzleHttp\RequestOptions::VERIFY => false,
]));
$crawler = $client->request('GET', 'https://www.makuake.com/discover/categories/product');
// eachメソッドは内部でクロージャを使用しているので、each内で外部変数max_page_numberに値を入れるためには参照渡しが必要
$max_page_number = 0;
$crawler->filter('#projectDetails .pagiBase ul li a')->each(function ($node) use (&$max_page_number) {
  preg_match('/^\/discover\/categories\/product\/(\d+)/', $node->attr('href'), $match_result);
  if (!empty($match_result) && (int)$match_result[1] > $max_page_number) {
    $max_page_number = $match_result[1];
  }
});

if ($max_page_number == 0) {
  echo "item not found";
  return;
}

$max_page_number = 3;
$project_data = array();
$dateTime = new DateTime();
for ($i = 1; $i <= $max_page_number; $i++) {
  $crawler->filter('.projectBox')->each(function ($node) use (&$i, &$project_data, &$dateTime) {
    $title = $node->filter('a.projectLink h2')->text();
    $splited_img = explode('?', $node->filter('a.projectLink img')->attr('src'));
    $replaced_date = preg_replace('/[^0-9a-zA-Z]/', '',
      $node->filter('.projectFooter .projectBottom .projectTime dl dd')->text());
    $dateTime->modify("+$replaced_date day");
    $format_date = $dateTime->format(('Y-m-d'));
    // datetime使いまわすために現在日に戻す
    $dateTime->modify("-$replaced_date day");

    $project_data[$i][] = array('title' => $title, 'img' => $splited_img[0], 'closing_date' => $format_date);
  });

  $link = $crawler->selectLink($i)->link();
  $crawler = $client->click($link);
}

try {
  $pdo = new PDO('mysql:host=localhost;dbname=scraping;charset=utf8', 'root', '',
    array(PDO::ATTR_EMULATE_PREPARES => false));
  $query = [];
  $param = [];
  //マルチインサート用データ組み立て
  foreach ($project_data as $page_number => $page_item_list) {
    foreach ($page_item_list as $key => $data) {
      $query[] = '(?, ?, ?)';
      $param[] = $data['title'];
      $param[] = $data['img'];
      $param[] = $data['closing_date'];
    }
  }
  $sql = 'INSERT INTO cloud_project_item(title, img, closing_date) VALUES ';
  $sql .= implode(', ', $query);

  $stmt = $pdo->prepare($sql);
  $stmt->execute($param);


} catch (PDOException $e) {
  echo "<pre>";
  var_dump($e->getMessage());
  echo"</pre>";
  exit;
}

echo "insert end";






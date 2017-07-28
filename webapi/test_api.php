<?php
/**
 * Created by PhpStorm.
 * User: ecodev03
 * Date: 2017/07/27
 * Time: 15:58
 */
header( "Content-Type: application/json; charset=utf-8" );
header("Access-Control-Allow-Origin: *");
try {
  $pdo = new PDO('mysql:host=localhost;dbname=scraping;charset=utf8', 'root', '',
    array(PDO::ATTR_EMULATE_PREPARES => false));


  $sql = 'select * from cloud_project_item where id = :id';
  $stmt = $pdo->prepare($sql);
  $stmt->bindValue(':id', 13);
  $result = $stmt->execute();

  if (!$result) {
    echo "no data";
  }

  $row = $stmt->fetch(PDO::FETCH_ASSOC);
  echo json_encode($row);

} catch (PDOException $e) {
  echo "<pre>";
  var_dump($e->getMessage());
  echo"</pre>";
}
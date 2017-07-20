<?php
/**
 * Created by PhpStorm.
 * User: ecodev03
 * Date: 2017/07/18
 * Time: 17:19
 */

require_once(realpath(__DIR__) . "./vendor/autoload.php");

$client = new Goutte\Client();
$client->setClient(new \GuzzleHttp\Client([
  \GuzzleHttp\RequestOptions::VERIFY => false,
]));
$crawler = $client->request('GET', 'http://stocks.finance.yahoo.co.jp/us/profile/AAPL');

$crawler->filter('.boardFinCom tr')->each(function($node) {
  echo "<dt>" . $node->filter('th')->text() . "</dt><br>";
  echo "<dd>" . $node->filter('td')->text() . "</dd><br>";
});
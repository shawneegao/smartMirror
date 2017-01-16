<?php
$cityID  = $_GET['cityID'];
$url = "http://api.openweathermap.org/data/2.5/weather?id=".$cityID."&units=imperial&appid=4b7ac1b58469037acb570d280bf79c56";
echo (file_get_contents($url));
?>

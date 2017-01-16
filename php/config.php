<?php
$config = $_POST['data'];
$configFile = fopen('config.json', 'w');
fwrite($configFile, $config);
fclose($configFile);

?>
<?php


$filePath = $argv[1];

function load_2d_arr_from_file($filePath)
{
    $fileContent = file_get_contents($filePath);
    echo $fileContent . PHP_EOL;
}

load_2d_arr_from_file($filePath);

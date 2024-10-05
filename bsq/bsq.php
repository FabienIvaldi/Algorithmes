<?php
$filename = $argv[1];

$lines = file($filename, FILE_IGNORE_NEW_LINES);



function SizeSquare($lines)
{
    $height = count($lines);
    $width = strlen($lines[0]);
    $maxSize = 0;
    $bottomRight = [0, 0];

    $dp = array_fill(0, $height, array_fill(0, $width, 0));
    for ($i = 0; $i < $height; $i++) {
        for ($j = 0; $j < $width; $j++) {
            if ($lines[$i][$j] == '.') {
                if ($i == 0 || $j == 0) {
                    $dp[$i][$j] = 1;
                } else {
                    $dp[$i][$j] = min($dp[$i - 1][$j], $dp[$i][$j - 1], $dp[$i - 1][$j - 1]) + 1;
                }
                if ($dp[$i][$j] > $maxSize) {
                    $maxSize = $dp[$i][$j];
                    $bottomRight = [$i, $j];
                }
            }
        }
    }
    return [$maxSize, $bottomRight];
}
list($maxSize, $bottomRight) = SizeSquare($lines);
list($brY, $brX) = $bottomRight;


for ($i = $brY - $maxSize + 1;$i <= $brY;$i++ ){
    for ($j=$brX - $maxSize + 1; $j <= $brX;$j++){
        $lines[$i][$j] ='x';
    }
}

foreach ($lines as $line) {
    echo $line . PHP_EOL;
}

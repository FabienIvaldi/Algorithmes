<?php
$str = $argv[1];

function eval_expr($str)
{
    preg_match_all('/\d+/', $str, $matches); //récupere les chiffre de la string
    $ints = $matches[0];
    $result = '';
    foreach ($ints as $int) { // separe les nombres par une virgule
        $result .= $int . ','; 
    }
    if (strlen($result) > 0) {
        $result = substr($result, 0, -1); //supprime la derniere virgule en trop
    }
    $array = explode(',', $result); //supprime les virgules et tranforme la chaine en tableau
    $array = array_map('intval', $array);


    if (strpos($str, '+') !== false) { /// addition
        return array_sum($array);
    } elseif (strpos($str, '-') !== false) { /// soustraction
        $pr = $array[0];
        for ($i = 1; $i < count($array); $i++) {
            $pr -= $array[$i];
        }
        return $pr;
    } elseif (strpos($str, '*') !== false) { /// multiplication
        $pr = $array[0];
        for ($i = 1; $i < count($array); $i++) {
            $pr *= $array[$i];
        }
        return $pr;
    } elseif (strpos($str, '/') !== false) { /// division
        if (in_array(0, array_slice($array, 1))) {
            return "fail, we can't divide by 0 :(";
        } 
        $pr = $array[0];
        for ($i = 1; $i < count($array); $i++) {
            $pr /= $array[$i];
        }
        return $pr;
    } elseif (strpos($str, '%') !== false) { /// division
        $pr = $array[0];
        for ($i = 1; $i < count($array); $i++) {
            $pr %= $array[$i];
        }
        return $pr;
    }
}

$result = eval_expr($str);
echo $result . PHP_EOL;
//test
define('RED', "\033[31m");
define('GREEN', "\033[32m");
if(eval_expr('1+1') == 2 && eval_expr('2-5') == -3 && eval_expr('14*2') == 28 && eval_expr('2/5') == 0.4 && eval_expr('55%5') == 0 && eval_expr('1+1+2') == 4 && eval_expr('2-5-3') == -6 && eval_expr('14*2*0') == 0){
    echo GREEN.'all tests passed'.PHP_EOL;
} else {
    echo RED.'tests was failed'. PHP_EOL ;
}


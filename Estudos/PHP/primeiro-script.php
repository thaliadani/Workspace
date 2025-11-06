<?php
$nome = "Thalia";
$ligouTv;

echo " A " . $nome;

ligarTv(false);

function ligarTv($ligouTv)
{
    if ($ligouTv) {
        echo " ligou a TV.";
    } else {
        echo " não ligou a TV.";
    }
}

$numero1 = 20.32;
$numero2 = 6;
$total = somar($numero1, $numero2);

function somar($numero1, $numero2)
{
    return $numero1 + $numero2;
}

echo "<br><br>" . $numero1 . " + " . $numero2 . " = " . $total;

echo "<br><br>";

$numeros = [1, 2, 3];
$nomes = ["Maria", "João", "Thalia"];

echo"". $numeros[0] ."<br>";
echo "". $numeros[1] ."<br>";

echo "<br>";

echo "". $nomes[0] ."<br>";
echo "". $nomes[1] ."<br>";

echo "<br>";

for ($i = 1; $i < 11; $i++) {
    echo "". $i ."<br>";
}

echo "<br>";

while ($numeros[0] == 1 ) {
    $numeros[0] = 2;
    echo "". $numeros[0] ."<br>";
}






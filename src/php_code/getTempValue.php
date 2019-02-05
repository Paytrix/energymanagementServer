<?php
include "modbusGetData.php";

$dataTempValue= getModbusData(2,20030,2);
echo $dataTempValue;
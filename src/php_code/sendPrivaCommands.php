<?php
include "modbusSendData.php";

$data_true = array(TRUE); // ARRAY of bool = true
$data_false = array(FALSE); // ARRAY of bool = false

sendModbusData(2,30014,$data_false);
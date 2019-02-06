<?php
require_once("../phpmodbus-master/Phpmodbus/ModbusMasterTcp.php");
require_once("../phpmodbus-master/Phpmodbus/PhpType.php");

function sendModbusData ($slave_id, $register, $data) {
    $modbus = new ModbusMasterTcp("172.16.144.102");

    try {
        $modbus->writeSingleCoil($slave_id,$register,$data);
    }
    catch (Exception $e) {
        echo $modbus;
        echo $e;
        exit;
    }
}
<?php
require_once("/home/pi/reactServer/energymanagementserver/src/phpmodbus-master/Phpmodbus/ModbusMasterTcp.php");
require_once("/home/pi/reactServer/energymanagementserver/src/phpmodbus-master/Phpmodbus/PhpType.php");

function sendModbusData ($slave_id, $register, $data) {
    $modbus = new ModbusMasterTcp("172.16.144.102");

    try {
        if($register == 30016)
            echo ("Function missing");
        else
            $modbus->writeSingleCoil($slave_id,$register,$data);
    }
    catch (Exception $e) {
        echo $modbus;
        echo $e;
        exit;
    }
}
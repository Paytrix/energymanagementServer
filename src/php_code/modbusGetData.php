<?php
require_once("/home/pi/reactServer/energymanagementserver/src/phpmodbus-master/Phpmodbus/ModbusMasterTcp.php"); //../phpmodbus-master/Phpmodbus/ModbusMasterTcp.php
require_once("/home/pi/reactServer/energymanagementserver/src/phpmodbus-master/Phpmodbus/PhpType.php"); //../phpmodbus-master/Phpmodbus/PhpType.php

function getModbusData($slave_id, $register, $register_length, $unit = "default"){
	switch ($slave_id) {
		case 1:
			$modbus = new ModbusMasterTcp("172.16.144.100");
			try{
				$recData = $modbus->readMultipleInputRegisters(1,$register,$register_length);
			}
			catch (Exception $e) {
				echo $modbus;
				echo $e;
				exit;
			}
			for($i = 0; $i <= 3; $i++){
				$bin = decbin($recData[$i]);
				if($bin != "0") {
					for($a = 0; $a < (8-strlen($bin)); $a++){
						$bin = "0".$bin;
					}
				}
				else{
					$bin = "00000000";
				}
				$recData[$i] = $bin;
			}
		
			$binData = $recData[0].$recData[1].$recData[2].$recData[3];
			$floatData = unpack("f",pack("i",bindec($binData)));
		
			return $floatData[1];
			break;
		
		case 2:
			$modbus = new ModbusMasterTcp("172.16.144.102"); 
			try {
				$recData = $modbus->readMultipleInputRegisters(2,$register,$register_length);
			}
			catch (Exception $e) {
				echo $modbus;
				echo $e;
				exit;
			}
			
			$addingValue = 256 * $recData[0];
			$floatData = ($addingValue + $recData[1]);

			switch ($unit) {
				case "default":
					return $floatData;
					break;
				case "°C":
					return ($floatData / 10);
					break;
				case "kW":
					return $floatData;
					break;
			}
			break;
	}
	return null;
}

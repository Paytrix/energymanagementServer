<?php
include "modbusGetData.php";

$mysqli = new mysqli("localhost", "pi", "raspberry", "smartone");
if($mysqli->connect_errno){
	echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
// ************************ SMARTONE VALUES ************************
$sendDataTemp = $mysqli->prepare("INSERT INTO tempvalues (value, date) VALUES (?,NOW())");
$dataTemp = getModbusData(1,20000,2);
$sendDataTemp->bind_param('d',$dataTemp);
$sendDataTemp->execute();

$sendDataEnergy = $mysqli->prepare("INSERT INTO energyvalues (value, date) VALUES (?,NOW())");
$dataEnergy = getModbusData(1,20100,2);
$sendDataEnergy->bind_param('d',$dataEnergy);
$sendDataEnergy->execute();
// ************************ SMARTONE VALUES ************************

// ************************ PRIVA VALUES ************************
$sendTempPufferOben = $mysqli->prepare("INSERT INTO tempPufferOben (value, date) VALUES (?,NOW())");
$dataTempPufferOben = getModbusData(2,20000,2,"°C");
$sendTempPufferOben->bind_param('d',$dataTempPufferOben);
$sendTempPufferOben->execute();

$sendTempPufferMitteOben = $mysqli->prepare("INSERT INTO tempPufferMitteOben (value, date) VALUES (?,NOW())");
$dataTempPufferMitteOben = getModbusData(2,20002,2,"°C");
$sendTempPufferMitteOben->bind_param('d',$dataTempPufferMitteOben);
$sendTempPufferMitteOben->execute();

$sendTempPufferMitte = $mysqli->prepare("INSERT INTO tempPufferMitte (value, date) VALUES (?,NOW())");
$dataTempPufferMitte = getModbusData(2,20004,2,"°C");
$sendTempPufferMitte->bind_param('d',$dataTempPufferMitte);
$sendTempPufferMitte->execute();

$sendTempPufferMitteUnten = $mysqli->prepare("INSERT INTO tempPufferMitteUnten (value, date) VALUES (?,NOW())");
$dataTempPufferMitteUnten = getModbusData(2,20006,2,"°C");
$sendTempPufferMitteUnten->bind_param('d',$dataTempPufferMitteUnten);
$sendTempPufferMitteUnten->execute();

$sendTempPufferUnten = $mysqli->prepare("INSERT INTO tempPufferUnten (value, date) VALUES (?,NOW())");
$dataTempPufferUnten = getModbusData(2,20008,2,"°C");
$sendTempPufferUnten->bind_param('d',$dataTempPufferUnten);
$sendTempPufferUnten->execute();
// ************************ PRIVA VALUES ************************
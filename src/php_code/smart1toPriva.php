<?php
include "modbusGetData.php";
include "modbusSendData.php";

$mysqli = new mysqli("localhost", "pi", "raspberry", "smartone");
if($mysqli->connect_errno){
	echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
// *************** Wärmepumpe ***************
$smart1WP = getModbusData(1,20200,2);
switch ($smart1WP) {
    case 0:
        $smart1WPArray = array(false);
        break;
    case 100: // 100 = 1 = true
        $smart1WPArray = array(true);
        break;
    default:
        $smart1WPArray = array(false);
    break;
}
// *************** Wärmepumpe ***************

// *************** Heizstab ***************
$smart1HS = getModbusData(1,20300,2);
switch ($smart1HS) {
    case 0:
        $smart1HSArray = array(false);
        break;
    case 100: // 100 = 1 = true
        $smart1HSArray = array(true);
        break;
    default:
        $smart1HSArray = array(false);
    break;
}
// *************** Heizstab ***************

// *************** Sending values ***************
sendModbusData(2,30014,$smart1WPArray);
sendModbusData(2,30016,$smart1HSArray);
// *************** Sending values ***************
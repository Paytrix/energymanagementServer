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
	// ************************ tempPufferOben ************************
	$sendTempPufferOben = $mysqli->prepare("INSERT INTO tempPufferOben (value, date) VALUES (?,NOW())");
	$dataTempPufferOben = getModbusData(2,20000,2,"°C");
	$sendTempPufferOben->bind_param('d',$dataTempPufferOben);
	$sendTempPufferOben->execute();
	// ************************ tempPufferMitteOben ************************
	$sendTempPufferMitteOben = $mysqli->prepare("INSERT INTO tempPufferMitteOben (value, date) VALUES (?,NOW())");
	$dataTempPufferMitteOben = getModbusData(2,20002,2,"°C");
	$sendTempPufferMitteOben->bind_param('d',$dataTempPufferMitteOben);
	$sendTempPufferMitteOben->execute();
	// ************************ tempPufferMitte ************************
	$sendTempPufferMitte = $mysqli->prepare("INSERT INTO tempPufferMitte (value, date) VALUES (?,NOW())");
	$dataTempPufferMitte = getModbusData(2,20004,2,"°C");
	$sendTempPufferMitte->bind_param('d',$dataTempPufferMitte);
	$sendTempPufferMitte->execute();
	// ************************ tempPufferMitteUnten ************************
	$sendTempPufferMitteUnten = $mysqli->prepare("INSERT INTO tempPufferMitteUnten (value, date) VALUES (?,NOW())");
	$dataTempPufferMitteUnten = getModbusData(2,20006,2,"°C");
	$sendTempPufferMitteUnten->bind_param('d',$dataTempPufferMitteUnten);
	$sendTempPufferMitteUnten->execute();
	// ************************ tempPufferUnten ************************
	$sendTempPufferUnten = $mysqli->prepare("INSERT INTO tempPufferUnten (value, date) VALUES (?,NOW())");
	$dataTempPufferUnten = getModbusData(2,20008,2,"°C");
	$sendTempPufferUnten->bind_param('d',$dataTempPufferUnten);
	$sendTempPufferUnten->execute();
	// ************************ Wärmepumpenzähler ************************
	$sendWaermepumpenzaehler = $mysqli->prepare("INSERT INTO Waermepumpenzaehler (value, date) VALUES (?,NOW())");
	$dataWaermepumpenzaehler = getModbusData(2,20010,2,"kW");
	$sendWaermepumpenzaehler->bind_param('d',$dataWaermepumpenzaehler);
	$sendWaermepumpenzaehler->execute();
	// ************************ Kesselzähler ************************
	$sendKesselzaehler = $mysqli->prepare("INSERT INTO Kesselzaehler (value, date) VALUES (?,NOW())");
	$dataKesselzaehler = getModbusData(2,20012,2,"kW");
	$sendKesselzaehler->bind_param('d',$dataKesselzaehler);
	$sendKesselzaehler->execute();
	// ************************ Solarzähler ************************
	$sendSolarzaehler = $mysqli->prepare("INSERT INTO Solarzaehler (value, date) VALUES (?,NOW())");
	$dataSolarzaehler = getModbusData(2,20014,2,"kW");
	$sendSolarzaehler->bind_param('d',$dataSolarzaehler);
	$sendSolarzaehler->execute();	
	// ************************ Hauptrücklauftemperatur ************************
	$sendHauptruecklauftemperatur = $mysqli->prepare("INSERT INTO Hauptruecklauftemperatur (value, date) VALUES (?,NOW())");
	$dataHauptruecklauftemperatur = getModbusData(2,20016,2,"°C");
	$sendHauptruecklauftemperatur->bind_param('d',$dataHauptruecklauftemperatur);
	$sendHauptruecklauftemperatur->execute();
	// ************************ Vorlauftemperatur Heizkessel ************************
	$sendVorlauftemperaturHK = $mysqli->prepare("INSERT INTO VorlauftemperaturHK (value, date) VALUES (?,NOW())");
	$dataVorlauftemperaturHK = getModbusData(2,20018,2,"°C");
	$sendVorlauftemperaturHK->bind_param('d',$dataVorlauftemperaturHK);
	$sendVorlauftemperaturHK->execute();
	// ************************ Rücklauftemperatur Heizkessel ************************
	$sendRuecklauftemperaturHK = $mysqli->prepare("INSERT INTO RuecklauftemperaturHK (value, date) VALUES (?,NOW())");
	$dataRuecklauftemperaturHK = getModbusData(2,20020,2,"°C");
	$sendRuecklauftemperaturHK->bind_param('d',$dataRuecklauftemperaturHK);
	$sendRuecklauftemperaturHK->execute();
	// ************************ Vorlauftemperatur Heizlüfter ************************
	$sendVorlauftemperaturHL = $mysqli->prepare("INSERT INTO VorlauftemperaturHL (value, date) VALUES (?,NOW())");
	$dataVorlauftemperaturHL = getModbusData(2,20022,2,"°C");
	$sendVorlauftemperaturHL->bind_param('d',$dataVorlauftemperaturHL);
	$sendVorlauftemperaturHL->execute();
	// ************************ Raumtemperatur ************************
	$sendRaumtemperatur = $mysqli->prepare("INSERT INTO Raumtemperatur (value, date) VALUES (?,NOW())");
	$dataRaumtemperatur = getModbusData(2,20024,2,"°C");
	$sendRaumtemperatur->bind_param('d',$dataRaumtemperatur);
	$sendRaumtemperatur->execute();
	// ************************ Vorlauftemperatur Solar ************************
	$sendVorlauftemperaturSolar = $mysqli->prepare("INSERT INTO VorlauftemperaturSolar (value, date) VALUES (?,NOW())");
	$dataVorlauftemperaturSolar = getModbusData(2,20026,2,"°C");
	$sendVorlauftemperaturSolar->bind_param('d',$dataVorlauftemperaturSolar);
	$sendVorlauftemperaturSolar->execute();
	// ************************ Rücklauftemperatur Solar ************************
	$sendRuecklauftemperaturSolar = $mysqli->prepare("INSERT INTO RuecklauftemperaturSolar (value, date) VALUES (?,NOW())");
	$dataRuecklauftemperaturSolar = getModbusData(2,20028,2,"°C");
	$sendRuecklauftemperaturSolar->bind_param('d',$dataRuecklauftemperaturSolar);
	$sendRuecklauftemperaturSolar->execute();
	// ************************ Gesammte thermische Energie Boiler ************************
	$sendGesThermEnergie = $mysqli->prepare("INSERT INTO GesThermEnergie (value, date) VALUES (?,NOW())");
	$dataGesThermEnergie = getModbusData(2,20030,2);
	$sendGesThermEnergie->bind_param('d',$dataGesThermEnergie);
	$sendGesThermEnergie->execute();
// ************************ PRIVA VALUES ************************
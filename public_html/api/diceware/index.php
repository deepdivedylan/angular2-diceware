<?php

//prepare an empty reply
$reply = new stdClass();
$reply->status = 200;
$reply->data = null;

try {
	//determine which HTTP method was used
	$method = array_key_exists("HTTP_X_HTTP_METHOD", $_SERVER) ? $_SERVER["HTTP_X_HTTP_METHOD"] : $_SERVER["REQUEST_METHOD"];

	//sanitize input
	$id = filter_input(INPUT_GET, "id", FILTER_VALIDATE_INT);


	// handle GET request - if id is present, that tweet is returned, otherwise all tweets are returned
	if($method === "GET") {
		// get diceware data
		$dicewareJson = @file_get_contents("diceware.json");
		if($dicewareJson === false) {
			throw(new RuntimeException("Unable to read diceware data", 500));
		}
		$dicewareRolls = json_decode($dicewareJson);

		//get a specific diceware roll or all diceware rolls and update reply
		if(empty($id) === false) {
			$found = false;
			foreach($dicewareRolls as $dicewareRoll) {
				if($dicewareRoll->roll == $id) {
					$reply->data = $dicewareRoll;
					$found = true;
					break;
				}
			}
			if($found === false) {
				throw(new InvalidArgumentException("Diceware roll not found", 404));
			}
		} else {
			$reply->data = $dicewareRolls;
		}
	} else {
		throw (new InvalidArgumentException("Invalid HTTP method request"));
	}

	// update reply with exception information
} catch(Exception $exception) {
	$reply->status = $exception->getCode();
	$reply->message = $exception->getMessage();
} catch(TypeError $typeError) {
	$reply->status = $typeError->getCode();
	$reply->message = $typeError->getMessage();
}

header("Content-type: application/json");
if($reply->data === null) {
	unset($reply->data);
}

// encode and return reply to front end caller
echo json_encode($reply);

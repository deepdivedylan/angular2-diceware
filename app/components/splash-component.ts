import {Component, OnInit} from "@angular/core";
import {Diceware} from "../classes/diceware";
import {DicewareService} from "../services/diceware-service";

@Component({
	templateUrl: "./templates/splash.php"
})

export class SplashComponent implements OnInit {
	dicewareRolls: Diceware[] = [];

	constructor(private dicewareService: DicewareService) {}

	ngOnInit() : void {
		this.dicewareService.getAllDiceware()
			.subscribe(dicewareRolls => this.dicewareRolls = dicewareRolls);
	}
}

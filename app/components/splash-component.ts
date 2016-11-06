import {Component, OnInit} from "@angular/core";
import {Diceware} from "../classes/diceware";
import {DicewareService} from "../services/diceware-service";

@Component({
	templateUrl: "./templates/splash.php"
})

export class SplashComponent implements OnInit {
	dicewareRolls: Diceware[] = [];
	dicewareRollsFiltered: Diceware[] = [];
	dicewareRollSearch: string = null;

	constructor(private dicewareService: DicewareService) {}

	ngOnInit() : void {
		this.dicewareService.getAllDiceware()
			.subscribe(dicewareRolls => {
				this.dicewareRolls = dicewareRolls;
				this.dicewareRollsFiltered = dicewareRolls;
			});
	}

	filterByRoll() : void {
		if(this.dicewareRollSearch !== null) {
			this.dicewareRollsFiltered = this.dicewareRolls.filter((diceware: Diceware) => diceware.roll.indexOf(this.dicewareRollSearch) >= 0);
		} else {
			this.dicewareRollsFiltered = this.dicewareRolls;
		}
	}
}

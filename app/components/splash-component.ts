import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Diceware} from "../classes/diceware";
import {DicewareService} from "../services/diceware-service";

@Component({
	templateUrl: "./templates/splash.php"
})

export class SplashComponent implements OnInit {
	dicewareRolls: Diceware[] = [];
	dicewareRollsFiltered: Diceware[] = [];
	dicewareRollSearch: string = null;
	dicewareWordSearch: string = null;

	constructor(private dicewareService: DicewareService, private router: Router) {}

	ngOnInit() : void {
		this.dicewareService.getAllDiceware()
			.subscribe(dicewareRolls => {
				this.dicewareRolls = dicewareRolls;
				this.dicewareRollsFiltered = dicewareRolls;
			});
	}

	filterByRoll() : void {
		if(this.dicewareRollSearch !== null) {
			this.dicewareWordSearch = null;
			this.dicewareRollsFiltered = this.dicewareRolls.filter((diceware: Diceware) => diceware.roll.indexOf(this.dicewareRollSearch) >= 0);
		} else {
			this.dicewareRollsFiltered = this.dicewareRolls;
		}
	}

	filterByWord() : void {
		if(this.dicewareWordSearch !== null) {
			this.dicewareRollSearch = null;
			this.dicewareRollsFiltered = this.dicewareRolls.filter((diceware: Diceware) => diceware.word.indexOf(this.dicewareWordSearch.toLowerCase()) >= 0);
		} else {
			this.dicewareRollsFiltered = this.dicewareRolls;
		}
	}

	switchDiceware(diceware : Diceware) : void {
		this.router.navigate(["/diceware/", diceware.roll]);
	}
}

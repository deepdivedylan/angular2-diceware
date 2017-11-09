import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Diceware} from "../classes/diceware";
import {DicewareService} from "../services/diceware-service";
import {Observable} from "rxjs";
import "rxjs/add/observable/from";

@Component({
	templateUrl: "./templates/splash.html"
})

export class SplashComponent implements OnInit {
	dicewareRollsFiltered: Diceware[] = [];
	dicewareRollSearch: string = null;
	dicewareWordSearch: string = null;
	dicewareObservable : Observable<Diceware> = null;

	constructor(private dicewareService: DicewareService, private router: Router) {}

	ngOnInit() : void {
		this.dicewareService.getAllDiceware()
			.subscribe(dicewareRolls => {
				this.dicewareRollsFiltered = dicewareRolls;
				this.dicewareObservable = Observable.from(dicewareRolls);
			});
	}

	filterByRoll() : void {
		this.dicewareRollsFiltered = [];
		if(this.dicewareRollSearch !== null) {
			this.dicewareWordSearch = null;
			this.dicewareObservable
				.filter(diceware => diceware.roll.indexOf(this.dicewareRollSearch) >= 0)
				.subscribe(diceware => this.dicewareRollsFiltered.push(diceware));
		} else {
			this.dicewareObservable
				.subscribe(diceware => this.dicewareRollsFiltered.push(diceware));
		}
	}

	filterByWord() : void {
		this.dicewareRollsFiltered = [];
		if(this.dicewareWordSearch !== null) {
			this.dicewareRollSearch = null;
			this.dicewareObservable
				.filter(diceware => diceware.word.indexOf(this.dicewareWordSearch.toLowerCase()) >= 0)
				.subscribe(diceware => this.dicewareRollsFiltered.push(diceware));
		} else {
			this.dicewareObservable
				.subscribe(diceware => this.dicewareRollsFiltered.push(diceware));
		}
	}

	switchDiceware(diceware : Diceware) : void {
		this.router.navigate(["/diceware/", diceware.roll]);
	}
}

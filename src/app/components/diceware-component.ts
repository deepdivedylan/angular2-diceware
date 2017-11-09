import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {DicewareService} from "../services/diceware-service";
import {Diceware} from "../classes/diceware";

@Component({
	templateUrl: "./templates/diceware.html"
})

export class DicewareComponent implements OnInit {
	diceware: Diceware = new Diceware("", "");

	constructor(private dicewareService: DicewareService, private route: ActivatedRoute) {}

	ngOnInit() : void {
		this.route.params.forEach((params : Params) => {
			let roll = +params["roll"];
			this.dicewareService.getDiceware(roll)
				.subscribe(diceware => this.diceware = diceware);
		});
	}
}

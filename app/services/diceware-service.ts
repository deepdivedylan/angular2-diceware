import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {BaseService} from "./base-service";
import {Diceware} from "../classes/diceware";

@Injectable()
export class DicewareService extends BaseService {
	constructor(protected http: Http) {
		super(http);
	}

	private dicewareUrl = "api/diceware/";

	getAllDiceware() : Observable<Diceware[]> {
		return(this.http.get(this.dicewareUrl)
			.map(this.extractData)
			.catch(this.handleError));
	}

	getDiceware(roll: number) : Observable<Diceware> {
		return(this.http.get(this.dicewareUrl + roll)
			.map(this.extractData)
			.catch(this.handleError));
	}
}

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

	private dicewareUrl = "diceware.json";

	getAllDiceware() : Observable<Diceware[]> {
		return(this.http.get(this.dicewareUrl)
			.map(this.extractData)
			.catch(this.handleError));
	}
}
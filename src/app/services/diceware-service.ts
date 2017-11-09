import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Diceware} from "../classes/diceware";

@Injectable()
export class DicewareService {
	constructor(protected http: HttpClient) {}

	private dicewareUrl = "api/diceware/";

	getAllDiceware() : Observable<Diceware[]> {
		return(this.http.get<Diceware[]>(this.dicewareUrl));
	}

	getDiceware(roll: number) : Observable<Diceware> {
		return(this.http.get<Diceware>(this.dicewareUrl + roll));
	}
}

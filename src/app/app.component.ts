import {Component} from "@angular/core";

@Component({
	selector: 'diceware-app',
	templateUrl: './templates/diceware-app.html'
})

export class AppComponent {
	navCollapse = true;

	toggleCollapse() {
		this.navCollapse = !this.navCollapse;
	}
}
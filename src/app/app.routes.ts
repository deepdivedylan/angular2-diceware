import {RouterModule, Routes} from "@angular/router";
import {DicewareComponent} from "./components/diceware-component";
import {SplashComponent} from "./components/splash-component";
import {DeepDiveInterceptor} from "./services/deep.dive.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {APP_BASE_HREF} from "@angular/common";
import {DicewareService} from "./services/diceware-service";


export const allAppComponents = [DicewareComponent, SplashComponent];

export const routes: Routes = [
	{path: "diceware/:roll", component: DicewareComponent},
	{path: "", component: SplashComponent}
];

export const appRoutingProviders: any[] = [
	{provide: APP_BASE_HREF, useValue: window["_base_href"]},
	{provide: HTTP_INTERCEPTORS, useClass: DeepDiveInterceptor, multi: true},
	DicewareService
];

export const routing = RouterModule.forRoot(routes);

<h1>Splash Component</h1>
<div class="row">
	<div class="col-md-6">
		<div class="input-group">
			<input type="number" class="form-control" placeholder="Search By Roll&hellip;" [(ngModel)]="dicewareRollSearch" (keyup)="filterByRoll();" />
			<span class="input-group-addon"><i class="fa fa-search"></i></span>
		</div>
	</div>
	<div class="col-md-6">
		<div class="input-group">
			<input type="text" class="form-control" placeholder="Search By Word&hellip;" [(ngModel)]="dicewareWordSearch" (keyup)="filterByWord();" />
			<span class="input-group-addon"><i class="fa fa-search"></i></span>
		</div>
	</div>
</div>
<table class="table table-bordered table-hover table-responsive table-striped">
	<tr><th>Roll</th><th>Word</th></tr>
	<tr class="cursor-pointer" *ngFor="let dicewareRoll of dicewareRollsFiltered" (click)="switchDiceware(dicewareRoll);">
		<td>{{ dicewareRoll.roll }}</td>
		<td>{{ dicewareRoll.word }}</td>
	</tr>
</table>

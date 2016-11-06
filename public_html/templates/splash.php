<h1>Splash Component</h1>
<table class="table table-bordered table-responsive table-striped table-word-wrap">
	<tr><th>Roll</th><th>Word</th></tr>
	<tr *ngFor="let dicewareRoll of dicewareRolls">
		<td>{{ dicewareRoll.roll }}</td>
		<td>{{ dicewareRoll.word }}</td>
	</tr>
</table>

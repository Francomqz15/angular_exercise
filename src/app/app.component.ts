import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent {
	title = 'exercise-test';

	profileForm = new FormGroup({
		first: new FormControl(),
		last: new FormControl()
	});

}

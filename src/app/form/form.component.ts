import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.sass']
})

export class FormComponent implements OnInit {

	dataUser: any;
	profileForm: FormGroup

	constructor() {
		this.dataUser = [];
		this.profileForm = new FormGroup({
			name: new FormControl(),
			lastname: new FormControl(),
			telephone: new FormControl(),
			email: new FormControl(),
			photo: new FormControl()
		});
	 }

	ngOnInit() {
	}

	sendInfo(event: Event){
		event.preventDefault()
		this.dataUser.push(this.profileForm.value)
	}
}

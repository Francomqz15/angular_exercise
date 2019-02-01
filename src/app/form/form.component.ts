import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.sass']
})

export class FormComponent implements OnInit {

	listDataPartner: any;
	profileForm: FormGroup;
	idUser: number;
	editform: boolean;
	imageUrl: any;
	isUploaded: boolean;
	@ViewChild("fileInput") fileInput;

	constructor() {
		this.listDataPartner = [];
		this.profileForm = new FormGroup({
			name: new FormControl('',Validators.required),
			lastname: new FormControl('',Validators.required),
			adress: new FormControl('',Validators.required),
			telephone: new FormControl('',Validators.required),
			email: new FormControl('',Validators.required),
			file: new FormControl('',Validators.required)
		});
		this.idUser = 0;
		this.editform = false;
		this.isUploaded = false;
	}

	ngOnInit() {
	}

	sendInfo(event: Event){
		event.preventDefault()
		this.profileForm.value['id'] = this.idUser;


		if (this.imageUrl != '') {
			this.profileForm.value['avatar'] = this.imageUrl;
		}

		if (!this.editform) {	
			this.listDataPartner.push(this.profileForm.value)
		} else {
			let indexPartner  = this.listDataPartner.findIndex(partner => partner.id === this.profileForm.value.id)
			this.listDataPartner[indexPartner] = this.profileForm.value;
		}
		this.isUploaded = false;
		this.profileForm.reset();
		this.idUser++;
	}

	addFiles(e){
		let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
          this.imageUrl = reader.result;
          this.isUploaded = true;
        }
        
        reader.readAsDataURL(file);
	}

	deletePartner(profilePartner:any) {
		this.listDataPartner = this.listDataPartner.filter((partner:any)=> {
			return partner.id != profilePartner.id
		})
		this.idUser =  this.listDataPartner.length + 1;
	}

	editPartner(profilePartner:any) {
		this.editform = true;
		this.profileForm.patchValue({
			name: profilePartner.name,
			lastname: profilePartner.lastname,
			telephone: profilePartner.telephone,
			adress: profilePartner.adress,
			email: profilePartner.email,
		})
		this.idUser = profilePartner.id;
	}

}

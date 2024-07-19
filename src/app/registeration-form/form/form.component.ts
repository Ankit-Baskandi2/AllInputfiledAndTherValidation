import { Component, Directive, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  dateNow: any;
  userDeatil: any;
  fileError: string = '';
  constructor(private api: ApiService, private _fg: FormBuilder) {
    this.dateNow = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  }
  ngOnInit(): void {
    this.userDeatil = this._fg.group({
      FirstName: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(3)]],
      LastName: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(3)]],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required]],
      Gender: ['', [Validators.required]],
      DOB: ['', [Validators.required]],
      IsSDirect: [''],
      PhoneNumber: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      Major: ['', [Validators.required]]
    })
  }

  // userDeatil = new FormGroup({
  //  UserId : new FormControl(0,[Validators.required]),
  //   FirstName : new FormControl('',[Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
  //   LastName : new FormControl('',[Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
  //   Email : new FormControl('',[Validators.required, Validators.email]),
  //   Password : new FormControl('',[Validators.required]),
  //   Gender : new FormControl('',[Validators.required]),
  //   DOB : new FormControl('',[Validators.required]),
  //   IsSDirect : new FormControl(''),
  //   PhoneNumber : new FormControl('',[Validators.required]),
  //   Description : new FormControl('',[Validators.required]),
  //   Major : new FormControl('',[Validators.required])
  // })

  uploadFileData: any;

  HandleChange(data: any) {
    debugger;
    this.fileError = '';
    this.uploadFileData = data.target.files[0];
    let sizeOfFile = this.uploadFileData.size;
    let fileSizeInKB = Math.round(sizeOfFile / 1024);
    if (fileSizeInKB > 1) {
      data.target.value = '';
      this.fileError = 'File size should be 1kb'
    }
  }

  disableDate() {
    return false;
  }

  onSubmit() {
    const formData: FormData = new FormData()
    formData.append('file', this.uploadFileData)
    formData.append('firstName', this.userDeatil.value.FirstName!);
    formData.append('lastName', this.userDeatil.value.LastName!);
    formData.append('password', this.userDeatil.value.Password!);
    formData.append('email', this.userDeatil.value.Email!);
    formData.append('gender', this.userDeatil.value.Gender!);
    formData.append('dOB', this.userDeatil.value.DOB!);
    formData.append('isSDirect', this.userDeatil.value.IsSDirect!);
    formData.append('phoneNumber', this.userDeatil.value.PhoneNumber!);
    formData.append('description', this.userDeatil.value.Description!);
    formData.append('major', this.userDeatil.value.Major!);

    if (this.userDeatil.valid) {
      this.api.AddinDetails(formData).subscribe((data) => {
        console.log('data submited successfully');
        console.log(data);
      })
    }
    else {
      this.userDeatil.markAllAsTouched();
    }
  }
}

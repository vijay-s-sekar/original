import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator} from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [DatePipe]
})
export class RegisterComponent implements OnInit {

  hide = true;

  constructor(private fb: FormBuilder,
              private service:SharedService,
              private datePipe: DatePipe,
              private route: Router)
               { }
@Input() dep:any;
DepartmentId!: number;
FirstName!: string;
LastName!: string;
FathersName!:string;
DateOfBirth!:string;
Email!:EmailValidator;
Department!:string;
Dept!: string;
Phone!:string;
Schoolname!:string;
Address!:string;


foods: Food[] = [
  {value: 'CSE', viewValue: 'CSE'},
  {value: 'ECE', viewValue: 'ECE'},
  {value: 'EEE', viewValue: 'EEE'}
];

  registerForm: FormGroup = this.fb.group({
    FirstName: ['',[Validators.required]],
    LastName: ['',[Validators.required]],
    FathersName:['',[Validators.required]],
    DateOfBirth:['',[Validators.required]],
    Phone:['',[Validators.required]],
    Schoolname:['',[Validators.required]],
    Address:['',[Validators.required]],
    Email:['',[Validators.required,Validators.email]],
    
    Dept:['',[Validators.required]],
   


  })
    ngOnInit(): void {}

  onRegister(){   

//         let arr: any[] = [];  
//         Object.keys(this.registerForm.value).map((key) =>{  
//         arr.push({[key]:(this.registerForm.value[key])})
  
//       });
// var cc:any[]=[];
// for (let i in arr)
// {
//   console.log(arr[i]);
// }
// console.log(arr);
// var val={
// }
// console.log( val);
// this.service.onRegister(arr).subscribe(res=>{
//   alert(res.toString());
// });


// console.log(this.registerForm.get("DepartmentName")?.value);
console.log(this.registerForm.get("FirstName")?.value);
console.log(this.registerForm.get("LastName")?.value);
console.log(this.registerForm.get("FathersName")?.value);
console.log(this.registerForm.get("DateOfBirth")?.value);
this.DateOfBirth=this.registerForm.get("DateOfBirth")?.value;
console.log(this.registerForm.get("Dept")?.value);
console.log(this.registerForm.get("Phone")?.value);


var val={ 
          DepartmentId:this.DepartmentId,
          FirstName:this.registerForm.get("FirstName")?.value,
          LastName:this.registerForm.get("LastName")?.value,
          FathersName:this.registerForm.get("FathersName")?.value,
          // DateOfBirth:this.registerForm.get("DateOfBirth")?.value
          // DateOfBirth:this.registerForm.get("DateOfBirth")?.value
          DateOfBirth: this.datePipe.transform(this.DateOfBirth, 'yyyy-MM-dd'),
          Phone:this.registerForm.get("Phone")?.value,
          Schoolname:this.registerForm.get("Schoolname")?.value,
          Address:this.registerForm.get("Address")?.value,

          Email:this.registerForm.get("Email")?.value,
          Dept:this.registerForm.get("Dept")?.value
         

        };

this.service.onRegister(val).subscribe(res=>{
  alert(res.toString());
});
 
  }
  }
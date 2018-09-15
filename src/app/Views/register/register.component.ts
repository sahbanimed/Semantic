import { Component, OnInit, HostListener } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  @HostListener("scroll", ["$event"])
  onElementScroll(): void {
    var elem = document.getElementById('th-infinite-scroll-tracker');
    var pos = elem.scrollTop + elem.offsetHeight; 
    var max = elem.scrollHeight;
     if(pos == max )   {
      this.visibilitie=true;
     }
  }

  constructor(private service:UserService) { }

  etape:boolean;
  visibilitie:boolean;
  reglement:boolean;
  hide = true;

  ngOnInit() {
    this.etape=false;
    this.visibilitie=false;
    this.reglement=false;
  }

  formRegister = new FormGroup({
    Email : new FormControl('',[Validators.required,Validators.email]),   
    Password : new FormControl('',[Validators.required,Validators.minLength(8)])  
  });

  register(formRegister:NgForm){
    let user =new User();
    user.Email=formRegister.value.Email;
    user.Password=formRegister.value.Password;
    this.service.register(user).subscribe(createdUser=>{
    })
  }

  get Email(){
    return this.formRegister.get('Email');
  }

  get Password(){
    return this.formRegister.get('Password');
  }

  previous(){
    this.etape=false;
    this.reglement=false;
  }

  next(){
    this.etape=true;
  }

  checked(){
    if(this.reglement==true){
      this.reglement=false;
    }
    else if(this.reglement==false){
      this.reglement=true;
    } 
  }

  isFieldValid(field: string) {
    return !this.formRegister.get(field).valid && this.formRegister.get(field).touched;
  }
  
  displayFieldCss(field: string) {
    return {
    'has-error': this.isFieldValid(field),
    'has-feedback': this.isFieldValid(field)
    };
  }  

}

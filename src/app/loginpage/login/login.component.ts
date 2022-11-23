import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userinput: any;
  userpass: any;
  myform!: any;
  user: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.myform = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      
    })
  }
  // loginuser(pass: string , student:string,teacher:string) {
  //   this.teacherdata = localStorage.getItem("teacher");
  //   this.studentdata = localStorage.getItem("student");

  //   if (this.teacherdata == (pass)) {
  //    this.router.navigate([`${teacher}`])
  //    alert("Successfully Logged In as Teacher ");
  //    }
  //    else if (this.studentdata == (pass)) {
  //      this.router.navigate([`${student}`])
  //      alert("Successfully Logged In as Student");
  //    } else {
  //      alert("invalid Password ")
  //    }

  // }
  OnSubmit() {
    localStorage.setItem("User", JSON.stringify(this.myform.value));
    this.router.navigate([`teacher`])
    
  }
  
}


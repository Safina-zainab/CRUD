import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  assignment: any = [];
  assignpost = 'ngForm';
  studentObj = {
    name: '',
    subject: '',
    description: '',
    id: '',
  };
  constructor(private router:Router) { 
    this.assignment = [];
  }

  ngOnInit(): void {
    this.getdata();
  }
  logout() {
    this.router.navigate([``])
  }
  display: boolean = false;
 
  getdata() {
    let task:any = localStorage.getItem('Assignment')
    task = JSON.parse(task)  
    this.assignment = task
    console.log(this.assignment);
  }
  remove(index:any) {
    this.assignment.splice(index, 1);
    localStorage.setItem("Assignment", JSON.stringify(this.assignment));
    alert("Deleted Successfully!!!!");
  } 

  add() {
    this.display = !this.display;
  }

  Edit(index: any) {
    this.add();
    let task:any = localStorage.getItem('Assignment')
    task = JSON.parse(task);
    console.log(task);
    
 }

}

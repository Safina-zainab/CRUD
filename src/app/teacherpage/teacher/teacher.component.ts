import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  display: boolean = false;
  assignpost = 'ngForm';
  taskList: any = [];
  constructor(private router:Router) {
    
  }

  ngOnInit(): void {
  }
  logout() {
    this.router.navigate([``])
  }
  
  add() {
    this.display = !this.display;
  }
  onAssign(value: any) {
    let oldTasks: any= localStorage.getItem('Assignment');
    this.taskList = JSON.parse(oldTasks);
    this.taskList.push(value);
    console.log(this.taskList);
    localStorage.setItem('Assignment', JSON.stringify(this.taskList));
    this.router.navigate(['/listtask']);
  }
}


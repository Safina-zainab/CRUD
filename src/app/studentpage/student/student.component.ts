import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  assignpost = 'ngForm';
  taskList: any = [];
  constructor(private router: Router) {}

  ngOnInit(): void {}
  logout() {
    this.router.navigate([``]);
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

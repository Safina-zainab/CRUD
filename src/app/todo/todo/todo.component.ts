import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasklist: string[] = [
    'complete Angular Todo list App',
    'Complete TypeScript Cousre by today '
  ]

  constructor(private router:Router) {
    
  }

  ngOnInit(): void {
  }
  addTodo(e: any) {
    this.tasklist.unshift(e.value);

  }

  remtodo(e: any) {
    this.tasklist.splice(e, 1);
  }
}

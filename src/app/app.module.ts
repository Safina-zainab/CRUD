import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './loginpage/login/login.component';
import { StudentComponent } from './studentpage/student/student.component';
import { TodoComponent } from './todo/todo/todo.component';
import { TeacherComponent } from './teacherpage/teacher/teacher.component';
import { ListComponent } from './listtask/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    TodoComponent,
    TeacherComponent,
    ListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

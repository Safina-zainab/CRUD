import { NgModule } from '@angular/core';
import { RouterModule, Routes , RouterLink} from '@angular/router';
import { LoginComponent } from './loginpage/login/login.component';
import { StudentComponent } from './studentpage/student/student.component';
import { TodoComponent } from './todo/todo/todo.component';
import { TeacherComponent } from './teacherpage/teacher/teacher.component';
import { ListComponent } from './listtask/list/list.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'student', component: StudentComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'teacher', component: TeacherComponent },
  {path:'listtask',component:ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterLink],
  exports: [RouterModule]
})
export class AppRoutingModule { }

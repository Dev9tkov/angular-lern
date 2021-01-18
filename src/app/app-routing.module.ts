import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TaskListComponent} from './task-list/task-list.component';
import {NotesListComponent} from './notes-list/notes-list.component';
import {ViewTaskComponent} from './task-list/view-task/view-task.component';

// http://localhost:4200/ -> TaskListComponent
// http://localhost:4200/tasks -> TaskListComponent
// http://localhost:4200/tasks/2 -> ViewTaskComponent
// http://localhost:4200/notes -> NotesListComponent

const routes: Routes = [
  {path: '', redirectTo: 'tasks', pathMatch: 'full'},
  {path: 'tasks', component: TaskListComponent},
  {path: 'tasks/:id', component: ViewTaskComponent},
  {path: 'notes', component: NotesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

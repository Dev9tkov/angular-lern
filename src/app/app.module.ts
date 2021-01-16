import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { StatisticComponent } from './task-list/statistic/statistic.component';
import { ListRowComponent } from './task-list/list-row/list-row.component';
import { TaskAddComponent } from './task-list/task-add/task-add.component';
import {FormsModule} from '@angular/forms';
import { EditTaskComponent } from './task-list/edit-task/edit-task.component';
import { LogDirective } from './shared/directives/log.directive';
import { ColorDirective } from './shared/directives/color.directive';
import { MyTitleCasePipe } from './shared/pipes/my-title-case.pipe';
import { NotesListComponent } from './notes-list/notes-list.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'tasks', pathMatch: 'full'}, // если путь не выбран редирект на маршрут tasks
  {path: 'tasks', component: TaskListComponent}, // если выбран путь tasks будет отображён TaskListComponent в router-outlet
  {path: 'notes', component: NotesListComponent} // аналогично пути прописываются для других компонентов
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskListComponent,
    StatisticComponent,
    ListRowComponent,
    TaskAddComponent,
    EditTaskComponent,
    LogDirective,
    ColorDirective,
    MyTitleCasePipe,
    NotesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

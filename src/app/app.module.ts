import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { StatisticComponent } from './task-list/statistic/statistic.component';
import { TaskAddComponent } from './task-list/task-add/task-add.component';
import {FormsModule} from '@angular/forms';
import { EditTaskComponent } from './task-list/edit-task/edit-task.component';
import { LogDirective } from './shared/directives/log.directive';
import { ColorDirective } from './shared/directives/color.directive';
import { MyTitleCasePipe } from './shared/pipes/my-title-case.pipe';
import { NotesListComponent } from './notes-list/notes-list.component';
import {AppRoutingModule} from './app-routing.module';
import { ViewTaskComponent } from './task-list/view-task/view-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskListComponent,
    StatisticComponent,
    TaskAddComponent,
    EditTaskComponent,
    LogDirective,
    ColorDirective,
    MyTitleCasePipe,
    NotesListComponent,
    ViewTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

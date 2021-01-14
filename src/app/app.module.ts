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
    ColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

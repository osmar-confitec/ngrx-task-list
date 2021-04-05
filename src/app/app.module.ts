import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskService } from './tasks/services/task.service';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './tasks/reducers/task.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule, StoreModule.forRoot({ tasks: taskReducer }),
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadStateTask } from './tasks/actions/task.action';
import { Task, TaskType } from './tasks/models/tasks-models';
import { TaskService } from './tasks/services/task.service';

@Component({
  selector: 'task-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  TaskType = TaskType;
  title = 'ngrx-task-list';

  constructor(private taskService:TaskService,private store: Store<{ tasks: Task[] }>)
  {


  }
  ngOnInit(): void {

      this.taskService.getTasks().subscribe((tsks)=>{
            let arrs = [...tsks]
            this.store.dispatch(loadStateTask({tasks:arrs}))
      })


  }

}

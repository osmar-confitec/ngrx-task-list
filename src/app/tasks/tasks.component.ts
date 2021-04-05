import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateStateTask } from './actions/task.action';
import { Task, TaskType } from './models/tasks-models';
import { TaskService } from './services/task.service';

@Component({
  selector: 'task-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {


  tasks:Task[] = [];
  @Input() taskType:TaskType = TaskType.pending;
  TaskType = TaskType;
  tasks$: Observable<Task[]>

  constructor(private taskService:TaskService,
                       private store: Store<{ tasks: Task[] }>)
   {

      this.tasks$ =    store.select('tasks');

   }

   getDateFormatedState(task:Task):string
   {

    switch (this.taskType) {
      case TaskType.pending:
           return ` Criado em ${task.dateCreated.toDateString()} `
       case TaskType.progress:
            return ` Em Andamento em ${task.dateStart.toDateString()} `
            case TaskType.finished:
              return ` Finalizado em ${task.dateFinished.toDateString()} `
      default:
            return '';
    }

   }

   typeTaskDescription ( ):string
   {

    switch (this.taskType) {
      case TaskType.pending:
           return 'Pendente'
       case TaskType.progress:
            return 'Em Progresso'
            case TaskType.finished:
              return 'Finalizada'
      default:
            return '';
    }

   }

   play(task:Task)
   {
        switch (task.taskType) {
          case TaskType.pending:
               this.taskService.updateTask(task.id,TaskType.progress).subscribe((subs)=>{
                  this.store.dispatch(updateStateTask({taskType:TaskType.progress,taskId:task.id}))
               // this.LoadTasks();
              })
            break;
            case TaskType.progress:
               this.taskService.updateTask(task.id,TaskType.finished).subscribe((subs)=>{
                this.store.dispatch(updateStateTask({taskType:TaskType.finished,taskId:task.id}))
                // this.LoadTasks();
                })
            break;
          default:
            break;
        }
   }

   returnTask(task:Task)
   {

    switch (task.taskType) {
      case TaskType.progress:
          this.taskService.updateTask(task.id,TaskType.pending).subscribe((subs)=>{
            //this.LoadTasks();
            this.store.dispatch(updateStateTask({taskType:TaskType.pending,taskId:task.id}))
          })
        break;
        case TaskType.finished:
          this.taskService.updateTask(task.id,TaskType.progress).subscribe((subs)=>{
            this.store.dispatch(updateStateTask({taskType:TaskType.progress,taskId:task.id}))

            //this.LoadTasks();

          })
        break;
      default:
        break;
    }
   }

  ngOnInit(): void {
     // this.LoadTasks();
     this.tasks$.subscribe((tasks)=>{
        this.tasks = tasks.filter((tsk)=> tsk.taskType == this.taskType);
     });

  }


  private LoadTasks() {
    this.taskService.getTasks(this.taskType).subscribe((sub) => {
      this.tasks = [...[],...sub];
    });
  }
}

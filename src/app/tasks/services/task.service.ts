import { Task, TaskType } from './../models/tasks-models';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

 public tasks:Task[] = [
    {
      id:1,
      dateCreated:new Date(),
      name:'Acordar',
      observation:'',
      taskType: TaskType.pending
    },
    {
      id:2,
      dateCreated:new Date(),
      name:'Lavar o Rosto',
      observation:'',
      taskType: TaskType.pending
    },
    {
      id:3,
      dateCreated:new Date(),
      name:'Escovar os dentes',
      observation:'',
      taskType: TaskType.pending
    },
    {
      id:4,
      dateCreated:new Date(),
      name:'Tomar café',
      observation:'',
      taskType: TaskType.pending
    },
    {
      id:5,
      dateCreated:new Date(),
      name:'Dar café para a filha',
      observation:'',
      taskType: TaskType.pending
    },
    {
      id:6,
      dateCreated:new Date(),
      name:'Ligar o computador',
      observation:'',
      taskType: TaskType.pending
    },
    {
      id:7,
      dateCreated:new Date(),
      name:'Entrar na call',
      observation:'',
      taskType: TaskType.pending
    },
    {
      id:8,
      dateCreated:new Date(),
      name:'Participar da daily',
      observation:'',
      taskType: TaskType.pending
    },
    {
      id:9,
      dateCreated:new Date(),
      name:'Pegar a tarefa',
      observation:'',
      taskType: TaskType.pending
    },
    {
      id:10,
      dateCreated:new Date(),
      name:'Atrasar',
      observation:'',
      taskType: TaskType.pending
    },
    {
      id:11,
      dateCreated:new Date(),
      name:'Entregar a tarefa',
      observation:'',
      taskType: TaskType.pending
    },
    {
      id:12,
      dateCreated:new Date(),
      name:'Continuar Trabalhando',
      observation:'',
      taskType: TaskType.pending
    },
    {
      id:13,
      dateCreated:new Date(),
      name:'Finalizar',
      observation:'',
      taskType: TaskType.pending
    },
    {
      id:14,
      dateCreated:new Date(),
      name:'Jantar',
      observation:'',
      taskType: TaskType.pending
    },
    {
      id:15,
      dateCreated:new Date(),
      name:'Durmir',
      observation:'',
      taskType: TaskType.pending
    }

  ] ;

  constructor() { }


  updateTask(id:number,taskType:TaskType):Observable<Task>
  {
    let newTasks =  this.tasks.map((tsk,idx,tasks)=>
    {
    let taskCopy = {...tsk}
    if( taskCopy.id === id)
       {
        taskCopy.taskType = taskType;
       }
       return taskCopy;
    });
    this.tasks = [...[],...newTasks];
    return of(null);
  }

  getTasks(taskType?:TaskType):Observable<Task[]>
  {
    if (taskType != null)
    {
       let tskConsult =  this.tasks.filter((tsk)=> {
          if (tsk.taskType == taskType )
          return tsk;
       })
       return of(tskConsult);
    }
     return  of(this.tasks);
  }
}

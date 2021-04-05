export enum TaskType
{
  pending,
  progress,
  finished
}

export interface Task
{
  id:number;
  taskType:TaskType;
  name:string;
  observation:string;
  dateCreated:Date;
  dateStart?:Date;
  dateFinished?:Date;
}

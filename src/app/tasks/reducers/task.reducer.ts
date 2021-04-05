import { TaskType } from './../models/tasks-models';
import { createReducer, on } from '@ngrx/store';
import { loadStateTask, updateStateTask } from '../actions/task.action';
import { Task } from '../models/tasks-models';

export const initialState: Task[] = [];

const _taskReducer = createReducer(
  initialState,
  on(updateStateTask, (state, {taskType, taskId }) => {

    let newTasks =  state.map((tsk,idx,tasks)=>
    {
    let taskCopy = {...tsk}
    if( taskCopy.id === taskId)
       {
        taskCopy.taskType = taskType;
          switch (taskType) {
            case TaskType.finished:
              taskCopy.dateFinished = new Date()
              break;
              case TaskType.progress:
                taskCopy.dateStart = new Date()
                break;

            default:
              break;
          }
       }
       return taskCopy;
    });
    state = [...[],...newTasks];
    return state;
  }),
  on(loadStateTask, (state,{tasks} )=> {
      state = [...[],...tasks]
      return state;
  } )
);

export function taskReducer(state, action) {

  return _taskReducer(state, action);

}

import { Task } from './../models/tasks-models';
import { createAction, props } from '@ngrx/store';
import { TaskType } from '../models/tasks-models';

export const updateStateTask = createAction('[Task Component] updateStateTask', props<{taskType:TaskType, taskId:number}>());
export const loadStateTask = createAction('[Task Component] loadStateTask', props<{tasks:Task[]}>());

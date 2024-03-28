import { Injectable, OnInit } from '@angular/core';
import { Task } from '../@model/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class GlobalserviceService {

  constructor() { }
  
  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'},
    ],
  };
  
  allComplete: boolean = false;
  checkme: boolean = false;
  
  task2: Task = {
    name: 'Save In Service,not backend.',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary2', completed: false, color: 'primary'},
      {name: 'Accent2', completed: false, color: 'accent'},
      {name: 'Warn2', completed: false, color: 'warn'},
    ],
  };  
  allComplete2: boolean = false;
}

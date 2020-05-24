import {Component, OnInit} from '@angular/core';
import {TaskService} from '../services/task.service';
import {Task} from '../models/task.model';
import {AuthenticationService} from '../services/authentication.servcie';
import {UserSignIn} from '../models/usersignin.model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  providers: [DatePipe]
})
export class TasksComponent implements OnInit {

  taskList: Task[];
  user: UserSignIn;


  constructor(
    private taskService: TaskService,
    private authenticationService: AuthenticationService,

  ) {
    this.user = this.authenticationService.currentUserValue;

  }

  ngOnInit() {
    this.taskService.getTasks().subscribe(taskList => {
      this.taskList = taskList;
      console.log(this.taskList);
    });

  }
}

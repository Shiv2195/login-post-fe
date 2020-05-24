import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {Task} from '../models/task.model';
import {API} from '../app.constants';
import {Observable} from 'rxjs';
import {UserSignIn} from '../models/usersignin.model';


@Injectable({ providedIn: 'root' })
export class TaskService {
  user: UserSignIn;
  constructor(private http: HttpClient) {}

  getTasks(userId: string): Observable<Task[]> {
    return this.http.get<Task[]>(environment.API_URL + API.SHOW_TASK + userId);
  }

  getArchiveTasks(userId: string): Observable<Task[]> {
    return this.http.get<Task[]>(
      environment.API_URL + API.ARCHIVE_TASK + userId,
    );
  }
}

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {Task} from '../models/task.model';
import {API} from '../app.constants';


@Injectable({ providedIn: 'root' })

export class CreateTaskService {
    constructor(private http: HttpClient) { }

    createTask(task: Task, userId: string, token: string) {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.post(environment.API_URL + API.CREATE_TASK + userId, task, httpOptions);
    }


}

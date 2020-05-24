import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {Task} from '../models/task.model';
import {API} from '../app.constants';
import {Observable} from 'rxjs';


@Injectable({ providedIn: 'root' })

export class TaskService {
    constructor(private http: HttpClient) { }

    getTasks(): Observable<[]> {

        // @ts-ignore
        return this.http.get<Task[]>(environment.API_URL + API.SHOW_TASK);
    }

    // likeTask(userId:string, token:string, TaskId:string): Observable<Task> {
    //     const httpOptions = {
    //         headers: new HttpHeaders({
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${token}`
    //         })
    //
    //     };
    //     return this.http.put<Task>(environment.API_URL + API.Task_LIKE,{userId,TaskId},httpOptions )
    // }

}

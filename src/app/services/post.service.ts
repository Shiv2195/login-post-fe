import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';
import { API } from '../app.constants';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })

export class PostService {
    constructor(private http: HttpClient) { }

    getPosts(): Observable<Post[]> {

        return this.http.get<Post[]>(environment.API_URL + API.SHOW_POST);
    }

    likepost(userId:string, token:string, postId:string): Observable<Post> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
           
        };
        return this.http.put<Post>(environment.API_URL + API.POST_LIKE,{userId,postId},httpOptions )
    }

}
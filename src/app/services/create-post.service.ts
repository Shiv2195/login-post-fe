import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';
import { API } from '../app.constants';


@Injectable({ providedIn: 'root' })

export class CreatePostService {
    constructor(private http: HttpClient) { }

    createPost(post: Post, userId: string, token: string) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.post(environment.API_URL + API.CREATE_POST + userId, post, httpOptions);
    }


}
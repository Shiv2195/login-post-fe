import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import { AuthenticationService } from '../services/authentication.servcie';
import { UserSignIn } from '../models/usersignin.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [DatePipe]
})
export class PostComponent implements OnInit {

  postList: Post[];
  user: UserSignIn;


  constructor(
    private postService: PostService,
    private authenticationService: AuthenticationService,

  ) {
    this.user = this.authenticationService.currentUserValue;

  }

  ngOnInit() {
    this.postService.getPosts().subscribe(postList => {
      this.postList = postList;
      console.log(this.postList);
    });

  }

  onUpvote(index:number) {

    this.postService.likepost(this.user.user._id, this.user.token, this.postList[index]._id).subscribe(
      post=>{
        this.postList[index]= post;

      }
    )
    

  }

}

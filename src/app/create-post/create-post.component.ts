import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {UserSignIn} from '../models/usersignin.model';
import {AlertService} from '../services/alert.service';
import {AuthenticationService} from '../services/authentication.servcie';
import {CreatePostService} from '../services/create-post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup;
  loading = false;
  submitted = false;
  user: UserSignIn ;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private createPostService: CreatePostService,
    private alertService: AlertService,

  ) {
    this.user = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.createPostForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      body: ['', [Validators.required, Validators.minLength(20)]]

    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.createPostForm.controls; }

  onPostSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.createPostForm.invalid) {
      return;
    }

    this.loading = true;
    this.createPostService.createPost(this.createPostForm.value, this.user.user._id  ,
      this.user.token)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Post Created Successfully,Check in All Posts', true);
          this.loading = false;
          
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}

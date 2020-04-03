import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import * as moment from 'moment';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-blog-post',
  templateUrl: './new-blog-post.component.html',
  styleUrls: ['./new-blog-post.component.css']
})
export class NewBlogPostComponent implements OnInit {
  blogForm = new FormGroup ({
    blogDate: new FormControl(''),
    blogAuthor: new FormControl(''),
    blogTopic: new FormControl(''),
    blogContent: new FormControl(''),
  })
  public blogFormData;
  public mode = 'add';//default mode
  public id: string;//blog ID


  constructor(private _myService: BlogService, private router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('_id')) {
        this.mode = 'edit'; /*request had a parameter _id */
        this.id = paramMap.get('_id');
        this._myService.getBlogById(this.id).subscribe(
          data => {
          this.blogFormData = data;
          console.log(this.blogFormData);
          this.blogForm.patchValue({blogDate: this.blogFormData.blogDate});
          this.blogForm.patchValue({blogAuthor: this.blogFormData.blogAuthor});
          this.blogForm.patchValue({blogTopic: this.blogFormData.blogTopic});
          this.blogForm.patchValue({blogContent: this.blogFormData.blogContent});
        },
        err => console.error(err),
        () => console.log('finished loading blog')
        );
      }
      else {
        this.mode = 'add';
        this.id = null;
      }
    });

  }
  onSubmit() {
    this.blogForm.value.blogDate = this.getBlogDate();
    if (this.mode == 'add')
      this._myService.addBlogs(this.blogForm.value.blogDate, this.blogForm.value.blogAuthor, this.blogForm.value.blogTopic, this.blogForm.value.blogContent);
    if (this.mode == 'edit')
      this._myService.updateBlog(this.id, this.blogForm.value.blogDate, this.blogForm.value.blogAuthor, this.blogForm.value.blogTopic, this.blogForm.value.blogContent);
  }
  resetForm() {
    this.blogForm.value.blogDate = " ";
    this.blogForm.value.blogAuthor = " ";
    this.blogForm.value.blogTopic = " ";
    this.blogForm.value.blogContent = " ";
  }
  getBlogDate() {
    return moment().format('MMMM Do YYYY, h:mm:ss a');
  }

}
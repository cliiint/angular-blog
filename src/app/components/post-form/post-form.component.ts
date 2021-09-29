import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { v4 as uuidv4 } from 'uuid';
import { PostDataInterface } from 'src/app/models/post-data-interface';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: PostDataInterface,
    public dialogRef: MatDialogRef<PostFormComponent>,
    private fb: FormBuilder,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.initForm();
    if (this.data) this.patchPost();
  }

  initForm(): void {
    this.form = this.fb.group({
      uuid: null,
      title: [null, Validators.requiredTrue],
      author: null,
      published: [null, Validators.requiredTrue],
      hero_img: null,
      body: [null, Validators.requiredTrue]
    });
  }

  patchPost(): void {
    this.form.patchValue(this.data.post);
  }

  onSubmit(): void {
    if (this.data.formContext === 'Create') {
      this.form.get('uuid')?.setValue(uuidv4());
      this.form.get('published')?.setValue(new Date());
      this.postService.create(this.form.value);
      this.dialogRef.close();
    }

    if (this.data.formContext === 'Update') {
      this.postService.patch(this.form.value);
      this.dialogRef.close();
    }
  }
}

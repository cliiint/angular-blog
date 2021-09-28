import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
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

  patchPost() {
    
  }

  onSubmit() {
    console.log('submitting');
  }
}

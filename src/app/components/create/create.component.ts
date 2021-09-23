import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  form: FormGroup = this.fb.group({
    title: [Validators.requiredTrue],
    author: [],
    published: [Validators.requiredTrue],
    hero_img : [],
    body: [Validators.requiredTrue]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input, ViewChild, ContentChildren } from '@angular/core';
import { StepsetComponent } from '../stepset.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  active: boolean = false;
  valid:boolean=false;
  @Input() title: string;
  @ContentChildren(NgForm) form;
  constructor(private stepset: StepsetComponent) {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.form = this.form.toArray();
    this.stepset.addStep(this);
  }

}

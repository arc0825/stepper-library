import { Component, OnInit, EventEmitter, Output, Input, ElementRef, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'stepset',
  templateUrl: './stepset.component.html',
  styleUrls: ['./stepset.component.scss']
})
export class StepsetComponent implements OnInit {

  steps = [];
  stepNo = 0;
  totalSteps = 0;
  progressValue: number;
  strokeDashOffset: number;
  @ViewChild('progressbar') progressbar: ElementRef;
  @Input('finishBtn') styles?: any;
  @Input('btnPos') btnPos?: string = 'btn-left';
  @Output() next: EventEmitter<boolean> = new EventEmitter();
  @ViewChild('bar') circularBar: ElementRef;
  @Output() submitEvent: EventEmitter<boolean> = new EventEmitter();
  radius: number = 35;
  constructor(private rd: Renderer2) {
    this.strokeDashOffset = Math.PI * 2 * this.radius;
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.steps[0].active = true;
  }

  addStep(step) {
    this.totalSteps = this.steps.push(step);
  }

  jumpToStep(i) {
    if (this.steps[i > 0 ? i - 1 : i].valid) {
      this.stepNo = i;
      this.setActiveStep(this.stepNo);
    }
  }

  nextStep() {
    if (this.steps[this.stepNo].form[0]['valid']) {
      this.steps[this.stepNo].valid = true;
      this.stepNo < this.totalSteps ? this.setActiveStep(++this.stepNo) : null;
      this.next.emit(this.steps[this.stepNo].valid);
    }

  }

  setProgressbarColor() {
    this.progressValue = Math.floor(100 / (this.totalSteps - 1)) * this.stepNo - 100;
    this.rd.setStyle(this.circularBar.nativeElement, 'stroke-dashoffset', ((100 - this.progressValue) / 100) * (Math.PI * (2 * this.radius)) - this.strokeDashOffset)
  }

  prevStep() {
    this.stepNo > 0 ? this.setActiveStep(--this.stepNo) : null;
  }

  setActiveStep(index) {
    this.setProgressbarColor();
    this.steps.forEach(s => {
      s.active = false;
    });
    this.steps[index].active = true;
  }

  submit() {
    this.submitEvent.emit(true);
  }

}

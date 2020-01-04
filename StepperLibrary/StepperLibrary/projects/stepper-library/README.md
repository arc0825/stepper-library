# ng-stepper-library

A simple stepper form component for angular projects to display content in the form of steps that also checks for validity of the current step form and only then allows to move to the next step. This is usefull for forms with many fields for example, sign-up forms. On mobile it displays a circular progress bar and a horizontal progress bar on desktop screens.

## Installation

1. Install npm module:
    
    `npm install stepper-library --save`

## Usage

Import `StepsetModule` in your app and start using a component:


## Sample

## Mobile Screen
![ScreenShots](https://raw.githubusercontent.com/arc0825/stepper-library/master/mobilestepperscreen.png)

## Desktop Screen
####1.
![ScreenShots](https://raw.githubusercontent.com/arc0825/stepper-library/master/desktopstepperscreen.png)

####2.
![ScreenShots](https://raw.githubusercontent.com/arc0825/stepper-library/master/desktopstepperscreen2.png)

#Input (all are optional)
name | description | default | type | options
------------ | ------------- | ------------- | ------------- | -------------
containerPos | sets the position of the step container | left | string | left, right, center
strokeColor | sets the progress-bar color | green | string | -
title | sets the step title | green | string | -
btnPos | sets the position of the buttons container (back, next,finish) | left | string | btn-left, btn-right, btn-center, btn-apart
[finishBtn] | sets the finish button styles | - | object |-

#Output
name | description | type 
------------ | ------------- | ------------- | ------------- 
submitEvent | emits an event when finish button is clicked | boolean
next | emits an event everytime next button is clicked | boolean


* `<stepset>` is a container for all steps
 * `containerPos="center"` sets the position of the step container.
  * `strokeColor="rgb(201, 82, 230)"` sets the progress-bar color.
    * `[finishBtn]="customClass"` pass a class object defined in your component.ts file to customise finish button.
    * `(submitEvent)="doSomethingonsubmit($event)"` Callback to be called when finish button in the final step has been clicked.
    * `(next)="doSomethingonnext($event)"` next is emitted everytime the next button is clicked.
    * `btnPos="btn-right" ` position the button set using btn-right, btn-left, btn-center, btn-apart.

* `<step>` is a single step item
    * `title` Simple step title.


```javascript
import {Component} from "@angular/core";
import {StepsetModule} from "stepper-library";

@Component({
    selector: "app",
    template: `
<stepset [finishBtn]="buttonClass" btnPos="btn-right" containerPos="center" strokeColor="rgb(201, 82, 230)" (submitEvent)="submit()">
  <step title="Personal Info">
    <form #form1="ngForm">
      <div class="form-group">
        <label>Name</label>
        <input placeholder="Name" name="form11" [(ngModel)]="dummyform.fname" required>
      </div>
      <div class="form-group">
        <label>Email</label>
        <input placeholder="Email" name="email" [(ngModel)]="dummyform.email" required>
      </div>
    </form>
  </step>
</stepset>
`
})
export class App {

}

@NgModule({
    imports: [
        // ...
        StepsetModule
    ],
    declarations: [
        App
    ],
    bootstrap: [
        App
    ]
})
export class AppModule {

}
```



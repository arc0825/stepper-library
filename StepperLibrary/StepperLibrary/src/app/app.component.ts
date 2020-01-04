import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dummyform={
    lname:'lll',
    fname:'lll',
    mname:'ll'
  }

  buttonClass={'color':'green', 'background':'orange'};
  submit(){
    console.log("hello")
  }
}

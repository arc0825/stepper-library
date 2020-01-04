import { NgModule } from "@angular/core";
import { StepsetComponent } from "./stepset.component";
import { StepComponent } from "./step/step.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [StepsetComponent, StepComponent],
    exports: [StepComponent,StepsetComponent]
})
export class StepsetModule{}
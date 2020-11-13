import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormDirective } from "./../directive/form.directive";

@NgModule({
  declarations: [ FormDirective],
  imports: [CommonModule],
  exports: [ FormDirective],
})
export class GlobalModule {}

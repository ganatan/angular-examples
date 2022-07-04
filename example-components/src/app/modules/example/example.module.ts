import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleComponent } from './example.component';
import { ExampleRoutingModule } from './example-routing.module';
import { LabelComponent } from './label.component';
import { EditComponent } from './edit.component';
import { MemoComponent } from './memo/memo.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
    CommonModule,
    ExampleRoutingModule,
  ],
  exports: [
    ExampleComponent,
  ],
  declarations: [
    ExampleComponent,
    LabelComponent,
    EditComponent,
    MemoComponent,
    ButtonComponent
  ],
  providers: [
  ],
})
export class ExampleModule { }
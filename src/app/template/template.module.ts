import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { TemplateRoutingModule } from './template-routing.module';
import { BasicsComponent } from './basics/basics.component';
import { DinamicsComponent } from './dinamics/dinamics.component';
import { SwitchesComponent } from './switches/switches.component';
import { CustomDirective } from './directives/custom.directive';


@NgModule({
  declarations: [
    BasicsComponent,
    DinamicsComponent,
    SwitchesComponent,
    CustomDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule,
  ]
})
export class TemplateModule { }

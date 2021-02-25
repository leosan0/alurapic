import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PhotoFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule
  ]
})
export class PhotoFormModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShellModule } from '../pages/shell/shell.module';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShellModule,
    IonicModule.forRoot()
  ],
  declarations: [],
  exports: [
    ShellModule
  ]
})
export class ComponentsModule {}

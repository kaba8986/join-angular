import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';

const materialComponents: any = [MatFormFieldModule, MatIconModule, MatInputModule, MatSidenavModule];


@NgModule({
  declarations: [],
  imports: materialComponents,
  exports: materialComponents
})
export class MaterialModule { }

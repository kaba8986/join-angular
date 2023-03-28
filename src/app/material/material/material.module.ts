import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';

const materialComponents: any = [MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatSidenavModule];


@NgModule({
  declarations: [],
  imports: materialComponents,
  exports: materialComponents
})
export class MaterialModule { }

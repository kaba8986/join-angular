import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';

@Component({
  selector: 'app-impress',
  templateUrl: './impress.component.html',
  styleUrls: ['./impress.component.scss']
})
export class ImpressComponent implements OnInit {

  constructor(
    private _loc: Location
  ) { }

  ngOnInit(): void {
  }

  goBack() {
    this._loc.back();
  }

}

import { Component } from '@angular/core';

import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  title = 'my-wife';

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }
}

import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { FormsModule} from '@angular/forms'
@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.less']
})
export class BottomSheetComponent implements OnInit {
  public title : string = "Hey baby"
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>) {}

  ngOnInit() {
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  onSubmit(f) {

    console.log('submitted', f)
  }
}

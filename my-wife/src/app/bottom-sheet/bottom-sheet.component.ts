import { Component, OnInit, Input } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { FormsModule} from '@angular/forms'
@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.less']
})
export class BottomSheetComponent implements OnInit {
  public count : number = 0;
  
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

  getTitle() {
    this.count++;
    if (this.count === 1) {
      return "I could never live without you."
    } else if (this.count == 2) {
      return "I love you more than anything."
    } else if (this.count == 3) {
      return "I want to share my life with you."
    } else {
      return "You da best like DJ Khaled"
    }
    
  }
}

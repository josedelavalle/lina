import { Component, OnInit, Input } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { StepServiceService } from '../../services/step-service.service'
@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.less']
})
export class BottomSheetComponent implements OnInit {
  public count : number = 0;
  public picNum: number = 1;
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>, 
    private stepService : StepServiceService) {}
  
  ngOnInit() {
    this.stepService.castDataSet.subscribe(dataSet => {
      this.count = dataSet;
      this.getPicNumber()
    })
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  onSubmit(f) {

    console.log('submitted', f)
  }

  getTitle() {
    if (this.count === 1) {
      return "You are the best thing that has ever happened to me."
    } else if (this.count == 2) {
      return "I will honor you for all my days."
    } else if (this.count == 3) {
      return "I will protect you from any harm this world may throw."
    } else {
      return "I will take care of you, and our family with every bit of focus I can muster."
    }
    
  }

  getPicNumber() {
    var maxPic = 26;
    this.picNum = Math.floor(Math.random() * maxPic) + 1  
  }
}

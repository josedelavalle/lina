import { Component, HostBinding } from '@angular/core';

import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { validateVerticalPosition } from '@angular/cdk/overlay';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { StepServiceService } from './services/step-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private stepService : StepServiceService, private _bottomSheet: MatBottomSheet) {}
  showReveal = false;
  helpMenuOpen: string;
  title = 'my-wife';
  
  ngOnInit() {
    this.helpMenuOpen = 'out';
  }

  menuItems = [{
    name: "Number One",
    id: 1,
    visible: true
  },{
    name: "Number Two",
    id: 2,
    visible: false
  },{
    name: "Number Three",
    id: 3,
    visible: false
  },{
    name: "Number Four",
    id: 4,
    visible: false
  }];
  
  openBottomSheet(ndx : number): void {
    var $this = this;
    this.stepService.setDataSet(ndx);
    this._bottomSheet.open(BottomSheetComponent);
    setTimeout(function() {
      $this.menuItems.map(function(x) {
        if (x.id === ndx + 1) x.visible = true;
      });
    }, 1000);
    
    console.log('menuitems = ', this.menuItems)
    
    if (ndx == 4) {
      setTimeout(function() {
        $this.showReveal = !$this.showReveal;
      }, 1000)
    }
  }

  isVisible(ndx : number) {
    return this.menuItems.filter(x => x.id === ndx && x.visible).length > 0;
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { HeroTextComponent } from './components/hero-text/hero-text.component';
import { StepServiceService } from './services/step-service.service'
@NgModule({
  declarations: [
    AppComponent,
    BottomSheetComponent,
    HeroTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBottomSheetModule,
    FormsModule
  ],
  entryComponents: [BottomSheetComponent],
  providers: [StepServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

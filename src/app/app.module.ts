import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SizerModule } from './sizer/sizer.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SizerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

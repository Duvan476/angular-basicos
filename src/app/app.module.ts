import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesMondule } from './heroes/heroes.module';
import { ContadorMondule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesMondule,
    ContadorMondule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';

import { HelloworldfuncService } from './services/helloworldfunc.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HelloworldfuncService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
import {UserComponent} from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

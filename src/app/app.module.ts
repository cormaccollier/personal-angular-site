import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IAmCormacComponent } from './i-am-cormac/i-am-cormac.component';
import { WebDesignerComponent } from './web-designer/web-designer.component';
import { SoftwareEngineerComponent } from './software-engineer/software-engineer.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    IAmCormacComponent,
    WebDesignerComponent,
    SoftwareEngineerComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

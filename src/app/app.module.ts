import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IAmCormacComponent } from './i-am-cormac/i-am-cormac.component';
import { WebDesignerComponent } from './web-designer/web-designer.component';
import { SoftwareEngineerComponent } from './software-engineer/software-engineer.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    IAmCormacComponent,
    WebDesignerComponent,
    SoftwareEngineerComponent,
    StudentComponent,
    HomeComponent,
    ProjectComponent,
    TopMenuComponent,
    FooterMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IAmCormacComponent } from './i-am-cormac/i-am-cormac.component';
import { WebDesignerComponent } from './web-designer/web-designer.component';
import { SoftwareEngineerComponent } from './software-engineer/software-engineer.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: IAmCormacComponent,
  },
  {
    path: 'web',
    component: WebDesignerComponent,
  },
  {
    path: 'engineer',
    component: SoftwareEngineerComponent,
  },
  {
    path: 'student',
    component: StudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

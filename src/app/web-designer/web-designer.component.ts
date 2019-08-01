import { Component, OnInit } from '@angular/core';
import { ProjectConfig } from 'src/shared/ProjectConfig';
import { WebDesignerData } from 'src/shared/data';

@Component({
  selector: 'app-web-designer',
  templateUrl: './web-designer.component.html',
  styleUrls: ['./web-designer.component.scss']
})
export class WebDesignerComponent implements OnInit {
  projects: ProjectConfig[];

  constructor() { }

  ngOnInit() {
    this.projects = WebDesignerData;
  }

}

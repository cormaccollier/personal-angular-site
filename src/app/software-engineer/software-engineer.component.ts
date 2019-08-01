import { Component, OnInit } from '@angular/core';
import { ProjectConfig } from 'src/shared/ProjectConfig';
import { SoftwareData } from 'src/shared/data';

@Component({
  selector: 'app-software-engineer',
  templateUrl: './software-engineer.component.html',
  styleUrls: ['./software-engineer.component.scss']
})
export class SoftwareEngineerComponent implements OnInit {
  projects: ProjectConfig[];

  constructor() { }

  ngOnInit() {
    this.projects = SoftwareData;
  }

}

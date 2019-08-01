import { Component, OnInit, Input } from '@angular/core';
import { ProjectConfig } from 'src/shared/ProjectConfig';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project: ProjectConfig;

  constructor() { }

  ngOnInit() {
  }

}

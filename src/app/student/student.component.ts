import { Component, OnInit } from '@angular/core';
import { ProjectConfig } from 'src/shared/ProjectConfig';
import { StudentData } from 'src/shared/data';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  projects: ProjectConfig[];

  constructor() { }

  ngOnInit() {
    this.projects = StudentData;
  }

}

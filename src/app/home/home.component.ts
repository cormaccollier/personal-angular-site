import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  i: number;
  skills: string[];
  speed: number;
  text: string;
  skillsInd = 0;

  constructor() { }

  ngOnInit() {
    this.i = 0;
    this.skills = ['Angular', 'React', 'NodeJS', '.NETCore', 'WordPress'];
    this.speed = 200;
    this.text = '';
    this.typeWriter();
    
  }

  typeWriter() {
    if (this.i < this.skills[this.skillsInd].length) {
      this.text += this.skills[this.skillsInd].charAt(this.i);
      this.i++;
      setTimeout(() => this.typeWriter(), this.speed);
    } else {
      this.deleteTypeWriter();
    }
  }

  deleteTypeWriter() {
    if(this.i > 0) {
      this.text = this.text.slice(0,this.text.length - 2)
      this.i--;
      setTimeout(() => this.deleteTypeWriter(), this.speed);
    } else {
      if(this.skillsInd === this.skills.length - 1) {
        this.skillsInd = 0;
      } else {
        this.skillsInd++;
      }
      this.typeWriter();
    }
  }

}

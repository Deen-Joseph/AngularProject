import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor() { }
condition=false
  ngOnInit(): void {
  }
  // Directives
  color:string
  colors:string[]=["Red","Blue","Yellow","Green"]
  names:string[]=["Ann","Anna","Ron","Tomy"]
  check(){
  console.log(this.color)
}
}

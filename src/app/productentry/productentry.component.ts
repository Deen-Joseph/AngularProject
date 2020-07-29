import { Component, OnInit } from '@angular/core';
import {Product} from '../product'

@Component({
  selector: 'app-productentry',
  templateUrl: './productentry.component.html',
  styleUrls: ['./productentry.component.css']
})
export class ProductentryComponent implements OnInit {
  
model: Product
  constructor() { 
    console.log("constructor")
  }

  ngOnInit(): void {
    console.log("init function..")
    this.model = new Product ("map",101,111)
  }
  save(){
    console.log("function called..")
    console.log(this.model)
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }
  display='';
  i;
  op;
  k;
  value1='';
  value2=''; 
  result;
  option=''
  sum; 
  z='';


  ngOnInit(): void {
  }
  // add(){
  //   this.result=parseInt(this.value1)+parseInt(this.value2)
  // }
  operator(op){
    if(op=="+"){
      console.log(op)
      this.option=op 
    
    console.log(this.value1 + op )
    this.display=(this.value1 + op) 

    } 
    else if(op=="-"){
      console.log(op)
      this.option=op 
    
      console.log(this.value1 + op )
      this.display=(this.value1 + op)
      // this.sum=(parseInt(this.value1)-parseInt(this.value2))
    }
    else if(op=="*"){
      console.log(op)
      this.option=op 
    
      console.log(this.value1 + op )
      this.display=(this.value1 + op)
      // this.sum=(parseInt(this.value1)-parseInt(this.value2))
    }
    else if(op=="/"){
      console.log(op)
      this.option=op 
    
      console.log(this.value1 + op )
      this.display=(this.value1 + op)
      // this.sum=(parseInt(this.value1)-parseInt(this.value2))
    }
    

  } 
  results(option){
    console.log(this.option)
    if(this.option=='+'){
        this.result=(parseInt(this.value1)+parseInt(this.value2))
    console.log(parseInt(this.value1)+parseInt(this.value2))
    this.display=(this.result) 
    this.value1=this.result
    this.value2=""
    }
    if(this.option=='-'){
        this.result=(parseInt(this.value1)-parseInt(this.value2))
    console.log(parseInt(this.value1)-parseInt(this.value2))
    this.display=(this.result)
    this.value1=this.result
    this.value2=""
    }
    if(this.option=='*'){
      this.result=(parseInt(this.value1) * parseInt(this.value2))
    console.log(parseInt(this.value1)*parseInt(this.value2))
    this.display=(this.result)
    this.value1=this.result
    this.value2=""
    }
    if(this.option=='/'){
      this.result=(parseInt(this.value1)/parseInt(this.value2))
    console.log(parseInt(this.value1)/parseInt(this.value2))
    this.display=(this.result)
    this.value1=this.result
    this.value2=""
    }
     
    // this.result=this.sum
    // console.log(this.result)
    // return this.result

  }
  num(i){
    this.value1=this.value1+i 
    this.display=this.value1 
    console.log(this.display) 
    }
  value(k){
    this.value2=this.value2+k
    console.log(this.value1 + this.option   + this.value2)
    this.display=(this.value1 +  this.option + this.value2)
  }  


}

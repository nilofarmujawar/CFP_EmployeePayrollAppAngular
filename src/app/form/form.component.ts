import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private router:Router) { }
  names:any="";
  ngOnInit(): void {
  }
  
  onCancle(){
    this.router.navigate(["dashboard"]);
  }
  onSubmitSave(inputform:NgForm){
    this.names=inputform.name;
    console.log(inputform.value);
  //  console.log("thankyouFor assigning the name"+this.names);
  }
}
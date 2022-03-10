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
  yourName:any="";
  ngOnInit(): void {
  }
  
  onCancle(){
    this.router.navigate(["dashboard"]);
  }
  onSubmitSave(inputform:NgForm){
    this.yourName=inputform.name;
    console.log(inputform.value);
  //  console.log("thankyou For signing up"+this.yourName);
  }
}
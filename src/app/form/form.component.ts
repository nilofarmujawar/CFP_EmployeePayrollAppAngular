import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { EmployeeModel } from '../EmployeeModel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  // Make parameterized constructor of employee which is our model
  employee: EmployeeModel = new EmployeeModel("",new Date,"", "","","", 0, "");

  //Getting id from routes snapshot using paramMap for doing update operation
  Id: any = this.route.snapshot.paramMap.get("Id");


  //Injected router to navigate from one component to another component
  //Injected ActivatedRoute to get access to information about route.here it take id as path variable
  constructor(private router: Router, private service: EmployeeService, private route: ActivatedRoute) { }

  //whenever the component is initialized ngOnInit method is invoked first
  ngOnInit(): void {
    //here we use this.id because we want to get the data of particular employee by searching there id for which we use Activated route
    this.service.getEmployeeById(this.Id).subscribe((getData: any) => {
      console.log(getData);
      this.employee = getData;
    });
  }

  // navigate user to DashboardComponent
  onCancel() {
    this.router.navigate(["error"]);
    setTimeout(function(){
      
    },3000);

    this.router.navigate(["dashboard"]);
  }



  getVal(value: String) {
    console.log(value);
    this.employee.department = value.toString();
  }


  //Calls addEmployeeData method in service which uses http post method to save employee data to the database
  //and also navigate the user from form view to dashboard view

  addEmployeeData() {
    console.log(this.employee);
    this.service.insertEmployee(this.employee).subscribe(data => {
      console.log("data is saved successfullly")
      this.router.navigate(["dashboard"])
    })
  }

  //  Calls updateEmployeeData method in service which uses http update method
  //  to update employee data in database using ID id required from routing the  path for that 
  //  we used activated route which take id as a path variable
  updateEmployeeData() {
    this.service.updateEmployeeById(this.employee, this.Id).subscribe(data => {
      console.log("data updated succesfully");
      this.router.navigate(["dashboard"])
    });
  }


  

}

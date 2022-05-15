import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // injected HttpClient to perform Http request
  constructor(private http:HttpClient) { }

     /**
   * Purpose: this method is used to request the POST http method.
   * it save the employee data in the database.
   * beacuse we used customize port thats we provide localhost 9191 instead of 8080
   * @returns the repsonse message of the POST method
   */
  insertEmployee(employee: any) {
    return this.http.post("http://localhost:8080/employPayrollApp/save", employee);
  }

 /**
   * Purpose: this methos is used to request the GET http method.
   * it fetch the employee data form the database.
   * @returns the repsonse message of the GET method
   */  
  getEmployee() {
    return this.http.get("http://localhost:8080/employPayrollApp/getAll");
  }

  //Used HttpClient service class  to perform Http request to get data from the database for particular Id on given url
  getEmployeeById(Id: number) {
    return this.http.get("http://localhost:8080/employPayrollApp/getById/"+Id);
  }

  //Used HttpClient service class  to perform Http request to update data in database on given url
  updateEmployeeById(employee: any,Id: number) {
    return this.http.put("http://localhost:8080/employPayrollApp/update/"+Id, employee);
  }
   
   /**
   * Purpose : DELETE request method to hit the HTTP server.
   * @param Id employee_id for which the delete action needs to be taken.
   * @returns the delete request response.
   */
  deleteById(employeeId:number): Observable<any> {
    return this.http.delete("http://localhost:8080/employPayrollApp/delete/"+employeeId);
  }
}

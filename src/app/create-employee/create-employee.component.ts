import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService, private router:Router) { }
  employees: Employee[];
  ngOnInit(): void {
  }
  goToEmployeeList() {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    }, error => console.log(error)
    );
this.router.navigate(['/employees'])
  }
  onSubmit() {
    console.log(this.employee);
    this.saveEmployees();

  }
  saveEmployees() {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
    }, error => console.log(error));
    this.goToEmployeeList();
  }

  // private goToEmployeeList() {
    
  //     this.employeeService.getEmployeeList().subscribe(data => {
  //       //console.log(data);
  //       this.employees = data;
  //     }, error => console.log(error)
  //     );
  //   }
  // }
}

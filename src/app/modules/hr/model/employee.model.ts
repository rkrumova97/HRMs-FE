export class Employee {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;
  gender: string;
  address: string;
  email: string;
  salary: number;
  startDate: any;
  vacationDays: number;
  workingHours: number;
  workingDays: number;
  grade: string;
  skill: any[];

  constructor(  firstName: string,
                middleName: string,
                lastName: string,
                age: number,
                gender: string,
                address: string,
                email: string,
                salary: number,
                startDate: any,
                vacationDays: number,
                woringHours: number,
                workingDays: number,
                grade: string,
                skill: any[] ) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.email = email;
    this.salary = salary;
    this.startDate = startDate;
    this.vacationDays = vacationDays;
    this.workingHours = woringHours;
    this.workingDays = workingDays;
    this.grade = grade;
    this.skill = skill;
  }
}

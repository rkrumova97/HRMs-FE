export class ApplicationForVacation {
  vacationDays: string;
  startDate: any;
  hrName: string;
  hrEmail: string;

  constructor( vacationDays: string,
               startDate: any,
               hrName: string,
               hrEmail: string) {
    this.vacationDays = vacationDays;
    this.startDate = startDate;
    this.hrName = hrName;
    this.hrEmail = hrEmail;
  }
}

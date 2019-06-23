export class ApplicationForVacation {
  vacationDays: string;
  startDate: any;
  hrName: string;

  constructor( vacationDays: string,
               startDate: any,
               hrName: string) {
    this.vacationDays = vacationDays;
    this.startDate = startDate;
    this.hrName = hrName;
  }
}

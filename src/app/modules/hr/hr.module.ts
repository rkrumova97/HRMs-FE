import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// Components
import {HrComponent} from './hr.component';
// Modules
import {HrRoutingModule} from './hr-routing.module';
import {CoreModule} from '../core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HireEmployeeComponent} from './components/hire-employee/hire-employee.component';
import {InterviewPersonComponent} from './components/interview-person/interview-person.component';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {ListEmployeesComponent} from './components/list-employees/list-employees.component';
import {GiveSalaryComponent} from './components/give-salary/give-salary.component';
import {EmployeeProfileComponent} from './components/employee-profile/employee-profile.component';
import {ArchiveComponent} from './components/archive/archive.component';
import {ProjectComponent} from './components/project/project.component';
import {AddProjectComponent} from './components/project/add-project/add-project.component';
import {NgbModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {AddPositionComponent} from './components/project/add-position/add-position.component';
import {AssignEmployeeComponent} from './components/project/assign-employee/assign-employee.component';
import {PopupComponent} from './components/list-employees/popup/popup.component';
import {ListUploadComponent} from '../upload/list-upload.component';
import {FormUploadComponent} from '../upload/form-upload.component';
import {DetailsUploadComponent} from '../upload/details-upload.component';

@NgModule({
  declarations: [
    HrComponent,
    HireEmployeeComponent,
    InterviewPersonComponent,
    ListEmployeesComponent,
    GiveSalaryComponent,

    EmployeeProfileComponent,
    ProjectComponent,
    AddProjectComponent,
    AddPositionComponent,
    AssignEmployeeComponent,
    ArchiveComponent,
    PopupComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    ListUploadComponent
  ],
  entryComponents: [
    PopupComponent,
  ],
  imports: [
    CommonModule,
    HrRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgbTabsetModule,
    NgbModule
  ],
  bootstrap: [HrComponent]
})
export class HrModule {
}


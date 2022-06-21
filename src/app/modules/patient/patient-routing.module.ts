import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsListComponent } from './components/doctors-list/doctors-list.component';
import { HomeComponent } from './components/home/home.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'specs-link', component: DoctorsListComponent },

  { path: 'view-doctors', component: DoctorsListComponent },
  { path: 'doctor-details/:id', component: DoctorDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class PatientRoutingModule {}

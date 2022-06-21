import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RouterModule } from '@angular/router';
import { PatientRoutingModule } from './patient-routing.module';
import { DoctorCardComponent } from './components/doctor-card/doctor-card.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { DoctorsListComponent } from './components/doctors-list/doctors-list.component';
import { FiltersComponent } from './components/filters/filters.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    NavBarComponent,
    DoctorsListComponent,
    HomeComponent,
    FooterComponent,
    DoctorCardComponent,
    DoctorDetailsComponent,
    FiltersComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule, PatientRoutingModule],
  exports: [
    NavBarComponent,
    DoctorsListComponent,
    HomeComponent,
    DoctorCardComponent,
    FiltersComponent,
  ],
})
export class PatientModule {}

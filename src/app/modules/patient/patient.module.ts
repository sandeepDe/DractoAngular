import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RouterModule } from '@angular/router';
import { PatientRoutingModule } from './patient-routing.module';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavBarComponent, DoctorsListComponent, HomeComponent, FooterComponent],
  imports: [CommonModule, MaterialModule, RouterModule, PatientRoutingModule],
  exports: [NavBarComponent, DoctorsListComponent, HomeComponent],
})
export class PatientModule {}

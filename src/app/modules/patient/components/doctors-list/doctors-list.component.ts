import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { SpecializationEnum } from 'src/app/models/specialization-enum';
import { PatientServiceService } from '../services/patient-service.service';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css'],
})
export class DoctorsListComponent implements OnInit {
  constructor(
    private _patientService: PatientServiceService,
    private _activatedRoute: ActivatedRoute
  ) {}

  doctorsList: Doctor[] = [];
  category: string = '';
  subCategory: string = '';

  doctors: Doctor[] = [];

  specializations = Object.keys(SpecializationEnum).filter((value) =>
    isNaN(Number(value))
  );

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe({
      next: (data) => {
        this.category = data['category'];
        this.subCategory = data['subCategory'];

        // this._patientService.getDoctors().subscribe({
        //   next: (data) => (this.doctorsList = data),
        // });

        this._patientService
          .getDoctorsByCategoryAndSubCategory(this.category, this.subCategory)
          .subscribe({
            next: (data) => {
              this.doctors = data;
              console.log(`inside method`);
            },
          });
      },
    });
  }
}

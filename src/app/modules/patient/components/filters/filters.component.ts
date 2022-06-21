import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientServiceService } from '../services/patient-service.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {
  doctorColumns: string[] = [];

  doctorPropArray: string[] = [];

  subCategories: string[] = [];

  constructor(
    private _patientService: PatientServiceService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._patientService.getDoctor().subscribe({
      next: (data) => {
        this.doctorColumns = Object.keys(data);

        for (const key of this.doctorColumns) {
          if (
            key == 'specialization' ||
            key == 'gender' ||
            key == 'doctorAddress'
          ) {
            this.doctorPropArray.push(key);
          }
        }
      },
    });
  }

  getSubCategories = (column: string) => {
    this._patientService.getDistinctSubCategories(column).subscribe({
      next: (data) => {
        this.subCategories = data;
      },
    });
  };
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { PatientServiceService } from '../services/patient-service.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css'],
})
export class DoctorDetailsComponent implements OnInit {
  constructor(
    private _patientService: PatientServiceService,
    private route: ActivatedRoute
  ) {}

  doctor!: Doctor;
  doctorId!: number;
  // userId: string | null = null;
  ngOnInit(): void {
    // console.log('User id is ', this.route.snapshot.paramMap.get('id'));
    // this.userId = this.route.snapshot.paramMap.get('id');

    this.route.paramMap.subscribe((params) => {
      console.log(params.get('id'));
      let id = params.get('id');
      if (id) this.doctorId = parseInt(id);

      this._patientService.getByDoctorId(this.doctorId).subscribe({
        next: (data) => (this.doctor = data),
      });
    });
  }
}

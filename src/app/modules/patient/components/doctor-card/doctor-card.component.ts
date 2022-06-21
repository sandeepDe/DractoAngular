import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.css'],
})
export class DoctorCardComponent implements OnInit {
  constructor() {}

  @Input() parentData!: Doctor;

  res: Doctor[] = [];

  ngOnInit(): void {
    console.log(this.parentData);
    this.res.push(this.parentData);
  }
}

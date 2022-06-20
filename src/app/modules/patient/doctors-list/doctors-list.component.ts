import { Component, OnInit } from '@angular/core';
import { SpecializationEnum } from 'src/app/models/specialization-enum';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css'],
})
export class DoctorsListComponent implements OnInit {
  constructor() {}

  specializations = Object.keys(SpecializationEnum).filter((value) =>
    isNaN(Number(value))
  );

  ngOnInit(): void {}
}

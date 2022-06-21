import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/models/doctor';

@Injectable({
  providedIn: 'root',
})
export class PatientServiceService {
  private _baseurl = 'http://localhost:8080/doctor-api/all-doctors';

  constructor(private _httpClient: HttpClient) {}

  getDoctor = (): Observable<Doctor> => {
    let url = 'http://localhost:8080/doctor-api/doctor';
    return this._httpClient.get<Doctor>(url);
  };
  getDoctors = (): Observable<Doctor[]> => {
    return this._httpClient.get<Doctor[]>(this._baseurl);
  };

  getByDoctorId = (id: number): Observable<Doctor> => {
    let url = `http://localhost:8080/doctor-api/doctor-id/${id}`;
    return this._httpClient.get<Doctor>(url);
  };

  getDistinctSubCategories = (category: string): Observable<string[]> => {
    let url = `http://localhost:8080/doctor-api/doctors/distinct/${category}`;
    return this._httpClient.get<string[]>(url);
  };

  getDoctorsByCategoryAndSubCategory = (
    category: string,
    subCategory: string
  ): Observable<Doctor[]> => {
    let url = `http://localhost:8080/doctor-api/doctors/choice?category=${category}&subCategory=${subCategory}`;
    return this._httpClient.get<Doctor[]>(url);
  };
}

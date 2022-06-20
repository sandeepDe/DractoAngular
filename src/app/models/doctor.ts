import { Department } from './department';
import { DoctorAddress } from './doctor-address';
import { Specialization } from './specialization';

export interface Doctor {
  doctorId: number;
  doctorName: string;
  qualification: string;
  gender: string;
  specialization: Specialization[];
  doctorAddress: DoctorAddress;
  department: Department;
}

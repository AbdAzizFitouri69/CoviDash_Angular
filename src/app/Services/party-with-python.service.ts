import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartyWithPythonService {

  constructor(
    private http : HttpClient
  ) { }

  private prefix = "http://localhost:10000"

  decisionTree(patient : any) : Observable<any>{
    return this.http.post(this.prefix+"/python",patient);
  }

  testing() : Observable<any>{
    return this.http.get(this.prefix+"/test");
  }

  decisionTreeVirus(virusPatient : any) : Observable<any>{
    return this.http.post(this.prefix+"/python/fatma",virusPatient);
  }

  decisionTreeSymptoms(symptomPatient : any) : Observable<any>{
    return this.http.post(this.prefix+"/python/nadine",symptomPatient);
  }


}

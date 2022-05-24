import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PartyWithPythonService } from 'src/app/Services/party-with-python.service';
import { PatientStateResultComponent } from './patient-state-result/patient-state-result.component';

@Component({
  selector: 'app-predict-patient-state',
  templateUrl: './predict-patient-state.component.html',
  styleUrls: [
    './predict-patient-state.component.css',
    '../../../../assets/css/maicons.css',
    '../../../../assets/css/bootstrap.css',
    '../../../../assets/vendor/owl-carousel/css/owl.carousel.css',
    '../../../../assets/vendor/animate/animate.css',
    '../../../../assets/css/theme.css'
  ]
})
export class PredictPatientStateComponent implements OnInit {


  form!: FormGroup;

  constructor(
    private service: PartyWithPythonService,
    private dg : MatDialog
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      age_bracket: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      notes: new FormControl('', [Validators.required]),
      nationality: new FormControl('', [Validators.required]),
      transmission: new FormControl('', [Validators.required])
    })
  }

  fd! : FormData;

  submit() {
    let patient : Patient = new Patient()
    //let fd: FormData = new FormData();
    patient.age_bracket = this.form.value.age_bracket;
    patient.gender = this.form.value.gender
    patient.nationality = this.form.value.nationality
    patient.notes = this.form.value.notes
    patient.transmission = this.form.value.transmission
    patient.state = this.form.value.state
    
    this.service.decisionTree(patient).subscribe(res => {
      console.log(res)
      this.dg.open(PatientStateResultComponent,{
        data : {
          result : res['result']
        }
      })
      // if(res['result'] == "Hospitalized"){
      //   console.log("This Motherfucker is staying")
      // }else if(res['result'] == "Recovered"){
      //   console.log("Cut the Oxygen")
      // }else{
      //   console.log("Get your shit together")
      // }
    })
  }

  testing(){
    this.service.testing().subscribe(res=>{
      if(res['result'] == "Hospitalized"){
        console.log("This Motherfucker is staying")
      }else if(res['result'] == "Recovered"){
        console.log("Cut the Oxygen")
      }else{
        console.log("Get your shit together")
      }
      //console.log(res)
      
    });
  }

}


export class Patient {
  age_bracket!: string
  gender!: string
  state!: string
  notes!: string
  nationality!: string
  transmission!: string
}

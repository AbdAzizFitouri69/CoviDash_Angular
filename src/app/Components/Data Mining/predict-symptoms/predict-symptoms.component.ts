import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PartyWithPythonService } from 'src/app/Services/party-with-python.service';
import { PredictSymptomsResultComponent } from './predict-symptoms-result/predict-symptoms-result.component';

@Component({
  selector: 'app-predict-symptoms',
  templateUrl: './predict-symptoms.component.html',
  styleUrls: ['./predict-symptoms.component.css',
    '../../../../assets/css/maicons.css',
    '../../../../assets/css/bootstrap.css',
    '../../../../assets/vendor/owl-carousel/css/owl.carousel.css',
    '../../../../assets/vendor/animate/animate.css',
    '../../../../assets/css/theme.css']
})
export class PredictSymptomsComponent implements OnInit {

  form!: FormGroup

  constructor(
    private dg: MatDialog,
    private service: PartyWithPythonService
  ) { }


  ngOnInit(): void {
    this.form = new FormGroup({
      age: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      fever: new FormControl(false, [Validators.required]),
      cough: new FormControl(false, [Validators.required]),
      fatigue: new FormControl(false, [Validators.required]),
      pains: new FormControl(false, [Validators.required]),
      nasal_congestion: new FormControl(false, [Validators.required]),
      shortness_of_breath: new FormControl(false, [Validators.required]),
      runny_nose: new FormControl(false, [Validators.required]),
      sore_throat: new FormControl(false, [Validators.required]),
      diarrhea: new FormControl(false, [Validators.required]),
      chills: new FormControl(false, [Validators.required]),
      headache: new FormControl(false, [Validators.required]),
      vomiting: new FormControl(false, [Validators.required]),
      lives_in_affected_area: new FormControl(false, [Validators.required]),
    })
  }

  submit() {
    const dic = new Map()
    dic.set(false, 0)
    dic.set(true, 1)
    let symptomes: Symptomes = new Symptomes();
    symptomes.age = this.form.value.age
    symptomes.gender = this.form.value.gender
    symptomes.fever = dic.get(this.form.value.fever)
    symptomes.cough = dic.get(this.form.value.cough)
    symptomes.fatigue = dic.get(this.form.value.fatigue)
    symptomes.pains = dic.get(this.form.value.pains)
    symptomes.nasal_congestion = dic.get(this.form.value.nasal_congestion)
    symptomes.shortness_of_breath = dic.get(this.form.value.shortness_of_breath)
    symptomes.runny_nose = dic.get(this.form.value.runny_nose)
    symptomes.sore_throat = dic.get(this.form.value.sore_throat)
    symptomes.diarrhea = dic.get(this.form.value.diarrhea)
    symptomes.chills = dic.get(this.form.value.chills)
    symptomes.headache = dic.get(this.form.value.headache)
    symptomes.vomiting = dic.get(this.form.value.vomiting)
    symptomes.lives_in_affected_area = dic.get(this.form.value.lives_in_affected_area)
    console.log(symptomes)
    this.service.decisionTreeSymptoms(symptomes).subscribe(res=>{
      //console.log(res)
      this.dg.open(PredictSymptomsResultComponent,{
        data : {
          result : res['result']
        }
      })
    })
  }

}

export class Symptomes {
  age!: number
  gender!: number
  fever!: number
  cough!: number
  fatigue!: number
  pains!: number
  nasal_congestion!: number
  shortness_of_breath!: number
  runny_nose!: number
  sore_throat!: number
  diarrhea!: number
  chills!: number
  headache!: number
  vomiting!: number
  lives_in_affected_area!: number
}

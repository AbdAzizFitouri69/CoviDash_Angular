import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PartyWithPythonService } from 'src/app/Services/party-with-python.service';
import { VirusContractionResultComponent } from './virus-contraction-result/virus-contraction-result.component';

@Component({
  selector: 'app-predict-virus-contraction',
  templateUrl: './predict-virus-contraction.component.html',
  styleUrls: [
    './predict-virus-contraction.component.css',
    '../../../../assets/css/maicons.css',
    '../../../../assets/css/bootstrap.css',
    '../../../../assets/vendor/owl-carousel/css/owl.carousel.css',
    '../../../../assets/vendor/animate/animate.css',
    '../../../../assets/css/theme.css'
  ]
})
export class PredictVirusContractionComponent implements OnInit {

  form! : FormGroup;

  constructor(
    private service : PartyWithPythonService,
    private dg : MatDialog
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      origin : new FormControl('',[Validators.required]),
      locationn : new FormControl('',[Validators.required]),
      sex : new FormControl('',[Validators.required]),
      age : new FormControl('',[Validators.required]),
      doses : new FormControl('',[Validators.required]),
      vaccin : new FormControl('',[Validators.required]) 
    })
  }

  submit(){
    let virusp : VirusPatient = new VirusPatient();
    virusp.age = this.form.value.age
    virusp.origin = this.form.value.origin
    virusp.locationn = this.form.value.locationn
    virusp.sex = this.form.value.sex
    virusp.vaccin = this.form.value.vaccin
    virusp.doses = this.form.value.doses
    console.log(virusp)
    this.service.decisionTreeVirus(virusp).subscribe(res=>{
      console.log(res);
      this.dg.open(VirusContractionResultComponent,{
        data : {
          result : res['result']
        }
      })
    })
  }

}

export class VirusPatient{
  origin! : number
  locationn! : number
  sex! : number
  age! : number
  doses! : number
  vaccin! : number
}

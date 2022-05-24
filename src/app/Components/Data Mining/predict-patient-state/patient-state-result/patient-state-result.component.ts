import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-patient-state-result',
  templateUrl: './patient-state-result.component.html',
  styleUrls: ['./patient-state-result.component.css',
    '../../../../../assets/css/maicons.css',
    '../../../../../assets/css/bootstrap.css',
    '../../../../../assets/vendor/owl-carousel/css/owl.carousel.css',
    '../../../../../assets/vendor/animate/animate.css',
    '../../../../../assets/css/theme.css']
})
export class PatientStateResultComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }


  result!: any

  ngOnInit(): void {
    this.result = this.data['result']
  }

}

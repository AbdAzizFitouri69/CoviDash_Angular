import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-predict-symptoms-result',
  templateUrl: './predict-symptoms-result.component.html',
  styleUrls: ['./predict-symptoms-result.component.css',
    '../../../../../assets/css/maicons.css',
    '../../../../../assets/css/bootstrap.css',
    '../../../../../assets/vendor/owl-carousel/css/owl.carousel.css',
    '../../../../../assets/vendor/animate/animate.css',
    '../../../../../assets/css/theme.css']
})
export class PredictSymptomsResultComponent implements OnInit {

  result!: any

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  ngOnInit(): void {
    this.result = this.data['result']
  }

}

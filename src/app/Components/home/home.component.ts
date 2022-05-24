import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SepcialNeedsComponent } from '../sepcial-needs/sepcial-needs.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    '../../../assets/css/maicons.css',
    '../../../assets/css/bootstrap.css',
    '../../../assets/vendor/owl-carousel/css/owl.carousel.css',
    '../../../assets/vendor/animate/animate.css',
    '../../../assets/css/theme.css'
  ]
})
export class HomeComponent implements OnInit {

  constructor(
    private dg : MatDialog
  ) { }

  ngOnInit(): void {
  }

  popUpSpecialForm(){
    this.dg.open(SepcialNeedsComponent)
  }

}

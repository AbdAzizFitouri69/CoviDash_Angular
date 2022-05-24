import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-tests',
  templateUrl: './testing-tests.component.html',
  styleUrls: ['./testing-tests.component.css',
    '../../../../assets/css/maicons.css',
    '../../../../assets/css/bootstrap.css',
    '../../../../assets/vendor/owl-carousel/css/owl.carousel.css',
    '../../../../assets/vendor/animate/animate.css',
    '../../../../assets/css/theme.css'
  ]
})
export class TestingTestsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showFiller = false;

}

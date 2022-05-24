import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-breathing-logo',
  templateUrl: './breathing-logo.component.html',
  styleUrls: ['./breathing-logo.component.css']
})
export class BreathingLogoComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
    setTimeout(this.getToDashboard,3000);
  }

  getToDashboard(){
    this.router.navigate(["/dash/vaccination"])
  }

}

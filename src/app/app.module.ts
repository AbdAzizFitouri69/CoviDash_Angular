import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { HeaderToolbarComponent } from './Components/header-toolbar/header-toolbar.component';
import { VaccinationComponent } from './Components/Dashboard Pages/vaccination/vaccination.component';
import { CasesComponent } from './Components/Dashboard Pages/cases/cases.component';
import { TestingTestsComponent } from './Components/Dashboard Pages/testing-tests/testing-tests.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { BreathingLogoComponent } from './Components/breathing-logo/breathing-logo.component';
import { PredictPatientStateComponent } from './Components/Data Mining/predict-patient-state/predict-patient-state.component';
import { PatientStateResultComponent } from './Components/Data Mining/predict-patient-state/patient-state-result/patient-state-result.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { PredictVirusContractionComponent } from './Components/Data Mining/predict-virus-contraction/predict-virus-contraction.component';
import { VirusContractionResultComponent } from './Components/Data Mining/predict-virus-contraction/virus-contraction-result/virus-contraction-result.component';
import { PredictSymptomsComponent } from './Components/Data Mining/predict-symptoms/predict-symptoms.component';
import { PredictSymptomsResultComponent } from './Components/Data Mining/predict-symptoms/predict-symptoms-result/predict-symptoms-result.component';
import { SepcialNeedsComponent } from './Components/sepcial-needs/sepcial-needs.component'
import { MatStepperModule } from '@angular/material/stepper';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    HeaderToolbarComponent,
    VaccinationComponent,
    CasesComponent,
    TestingTestsComponent,
    BreathingLogoComponent,
    PredictPatientStateComponent,
    PatientStateResultComponent,
    PredictVirusContractionComponent,
    VirusContractionResultComponent,
    PredictSymptomsComponent,
    PredictSymptomsResultComponent,
    SepcialNeedsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatMenuModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

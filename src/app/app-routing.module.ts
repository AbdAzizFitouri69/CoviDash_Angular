import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { BreathingLogoComponent } from './Components/breathing-logo/breathing-logo.component';
import { CasesComponent } from './Components/Dashboard Pages/cases/cases.component';
import { TestingTestsComponent } from './Components/Dashboard Pages/testing-tests/testing-tests.component';
import { VaccinationComponent } from './Components/Dashboard Pages/vaccination/vaccination.component';
import { PredictPatientStateComponent } from './Components/Data Mining/predict-patient-state/predict-patient-state.component';
import { PredictSymptomsComponent } from './Components/Data Mining/predict-symptoms/predict-symptoms.component';
import { PredictVirusContractionComponent } from './Components/Data Mining/predict-virus-contraction/predict-virus-contraction.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about_us", component: AboutUsComponent },
  { path: 'dash/vaccination', component: VaccinationComponent },
  { path: 'dash/cases', component: CasesComponent },
  { path: 'dash/tests', component: TestingTestsComponent },
  { path: 'loading', component: BreathingLogoComponent},
  { path: 'patient', component: PredictPatientStateComponent},
  { path: 'virus', component : PredictVirusContractionComponent},
  { path: 'symptoms', component : PredictSymptomsComponent},
  { path: "**", redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

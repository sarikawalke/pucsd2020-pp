import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { CareerObjectiveComponent } from './career-objective/career-objective.component';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import { AcademicActivityComponent } from './academic-activity/academic-activity.component';
import { StrengthComponent } from './strength/strength.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';

const appRoutes: Routes = [
  { path: 'contact-info', component: ContactInfoComponent },
{ path: 'education-details', component: EducationDetailsComponent },
{ path: 'personal-info', component: PersonalInfoComponent },
{ path: 'strength', component: StrengthComponent },
{ path: 'career-objective', component: CareerObjectiveComponent },
{ path: 'technical-skills', component: TechnicalSkillsComponent },
{ path: 'academic-activity', component: AcademicActivityComponent },


]
@NgModule({
  declarations: [
    AppComponent,
    ContactInfoComponent,
    CareerObjectiveComponent,
    EducationDetailsComponent,
    TechnicalSkillsComponent,
    AcademicActivityComponent,
    StrengthComponent,
    PersonalInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SensorsComponent } from './sensors/sensors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';
import { TtsComponent } from './tts/tts.component';
import { SigninComponent } from './signin/signin.component';
import { AiSupportComponent } from './ai-support/ai-support.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sensors', component: SensorsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'analysis', component: AnalysisComponent },
  { path: 'chatbox', component: ChatboxComponent },
  { path: 'user_profile', component: UserProfileComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tts', component: TtsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'signin', component: SigninComponent},
  { path: 'smart-lookup', component: AiSupportComponent },

  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

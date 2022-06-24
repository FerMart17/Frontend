import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { PrincipalAdmiComponent } from './components/principal-admi/principal-admi.component';
import { PrincipalParticipanteComponent } from './components/principal-participante/principal-participante.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { CalendarComponent } from './components/calendar/calendar.component';

const routes: Routes = [
  {path: 'principal', component: PrincipalComponent, pathMatch: 'full' },
  {path: 'principal/Participante', component: PrincipalParticipanteComponent, pathMatch: 'full' },
  {path: 'principal/Administrador', component: PrincipalAdmiComponent, pathMatch: 'full' },
  {path: 'login', component: LoginComponent, pathMatch: 'full' },
  {path: 'calendar', component: CalendarComponent, pathMatch: 'full' },
  {path: '**', pathMatch: 'prefix', redirectTo: 'principal',},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

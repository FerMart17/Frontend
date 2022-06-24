
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalAdmiComponent } from './components/principal-admi/principal-admi.component';
import { PrincipalParticipanteComponent } from './components/principal-participante/principal-participante.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RegistroReunionesComponent } from './components/registro-reuniones/registro-reuniones.component';
import { EstadisticaComponent } from './components/estadistica/estadistica.component';
import { GestionEmpleadosComponent } from './components/gestion-empleados/gestion-empleados.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { AudienciasComponent } from './components/audiencias/audiencias.component';
import { HeaderComponent } from './components/header/header.component';




import { AvatarModule } from 'ngx-avatar';
import { CalendarComponent } from './components/calendar/calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalAdmiComponent,
    PrincipalParticipanteComponent,
    PrincipalComponent,
<<<<<<< HEAD
    RegistroReunionesComponent,
    EstadisticaComponent,
    GestionEmpleadosComponent,
    AgendaComponent,
    AudienciasComponent,
    HeaderComponent
=======
    HeaderComponent,
    CalendarComponent
>>>>>>> 48c2e7c96bb3536f498daebe48440724df546d85
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
<<<<<<< HEAD
   AvatarModule
=======
    AvatarModule

>>>>>>> 48c2e7c96bb3536f498daebe48440724df546d85
  ],
  providers: [ LoginService,
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }

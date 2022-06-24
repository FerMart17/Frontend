import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userform: Empleado = new Empleado(); //usuario mapeado al formulario
  returnUrl!: string;
  msglogin!: string; // mensaje que indica si no paso el loguin

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService:LoginService) { 

  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }
//Es como un router entre paginas web
  irAPrincipal(){
    this.router.navigate(['principal']);
 }

  irAPricipalAdmi() {
    this.router.navigate(['principal/Administrador']);
  }
  irAPricipalParticipante() {
    this.router.navigate(['principal/Participante']);
  }
 

  login() {
    this.loginService.login(this.userform.username, this.userform.password)
    .subscribe(
    (result) => {
      var user = result;
      if (user.status == 1){
        //guardamos el user en cookies en el cliente
        sessionStorage.setItem("user", user.username);
        sessionStorage.setItem("userid", user.userid);
        sessionStorage.setItem("perfil", user.perfil);
        sessionStorage.setItem("rol", user.rol);

        //Pregunto si el rol coincide con administrador, si pasa eso tendria que redireccionar a pricipalAdmi
        if(user.rol == 'administrador'){
          this.irAPricipalAdmi();
        }else{ //en caso contrario ira a principalParticipante
          this.irAPricipalParticipante(); 
        }
        //redirigimos a home o a pagina que llamo
        this.router.navigateByUrl(this.returnUrl);
      } else {
        //usuario no encontrado muestro mensaje en la vista
        this.msglogin="Credenciales incorrectas..";
      }
    },
    error => {
      alert("Error de conexion");
      console.log("error en conexion");
      console.log(error);
      });
    }
     
}
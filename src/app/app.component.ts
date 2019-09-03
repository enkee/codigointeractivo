import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'codigointeractivo';
  titulo:any="Hola mundo codigo interactivo";
  datos:any={Nombre: "Enrique", Apellido: "Palomino", Edad: 42, Documento: "10698579"};

  eventoBoton(){
    console.log('ejecutamos el evento indicado para el control');
  }
}

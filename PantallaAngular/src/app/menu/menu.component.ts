import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private router: Router) { }
  accionBoton1() {
    // Lógica para el botón 1
    this.router.navigateByUrl('/persona');
  }

  accionBoton2() {
    // Lógica para el botón 2
    console.log('Botón 2 presionado');
  }

  accionBoton3() {
    // Lógica para el botón 3
    console.log('Botón 3 presionado');
  }

  accionBoton4() {
    // Lógica para el botón 4
    console.log('Botón 4 presionado');
  }

  accionBoton5() {
    // Lógica para el botón 5
    console.log('Botón 5 presionado');
  }
}
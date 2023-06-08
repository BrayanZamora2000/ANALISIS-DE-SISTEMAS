import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-insertapersona',
  templateUrl: './insertapersona.component.html',
  styleUrls: ['./insertapersona.component.css']
})
export class InsertapersonaComponent {
  nuevaPersona: any = {};

  constructor(private http: HttpClient) {}

  guardarPersona() {
    const url = 'http://localhost:8080/personas/';
    this.http.post(url, this.nuevaPersona)
      .subscribe(
        (response) => {
          alert('Registro guardado con éxito.');
        },
        (error) => {
          alert('Error al insertar.');
          // Manejar el error adecuadamente
        }
      );
  }
}
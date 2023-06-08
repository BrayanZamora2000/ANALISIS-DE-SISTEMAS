import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modulopersonas',
  templateUrl: './modulopersonas.component.html',
  styleUrls: ['./modulopersonas.component.css']
})
export class ModulopersonasComponent {
  personas: any[] = [];
  nuevaPersona: any = null;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.obtenerPersonas();
  }

  obtenerPersonas() {
    this.http.get('http://localhost:8080/personas').subscribe(
      (response: any) => {
        this.personas = response;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  asignarVuelos() {
    this.router.navigateByUrl('/inpersonas');
  }

  editarPersona(persona: any) {
    // Realiza la solicitud PUT para guardar los cambios
    this.http.put(`http://localhost:8080/personas/${persona.idIdentificacion}`, persona).subscribe(
      (response: any) => {
        alert('Edicion completada')
      },
      (error: any) => {
        alert('Error al guardar los cambios:');
        // Maneja el error de acuerdo a tus necesidades
      }
    );
  }

  eliminarPersona(persona: any) {
    // Lógica para eliminar persona en la base de datos
    this.http.delete(`http://localhost:8080/personas/${persona.idIdentificacion}`).subscribe(
      () => {
        // Eliminación exitosa, actualiza la lista de personas
        const index = this.personas.indexOf(persona);
        if (index !== -1) {
          this.personas.splice(index, 1);
          alert("Persona eliminada exitosamente");
        }
      },
      (error: any) => {
        console.error(error);
        alert("Persona Eliminada, actualice la pagina");
      }
    );
  }

  
}
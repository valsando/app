import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  datos:any={
    id:'',
    nombre:'',
    edad:''
}

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  save(){
    this.http.get("http://localhost/proyectos/baseIonic/guardar.php?id="+this.datos.id+"&nombre="+this.datos.nombre+"&edad="+this.datos.edad+"").subscribe(snap=>{
      
               console.log(snap);
  });
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {


  @Input() users:any[]= []
  @Input() configuracion:any = []
  @Output() editar = new EventEmitter<any>();


  cantidad_producto_mostrados: number = 5;
  datos_aux: any [] = []
  paginaActual: number = 1 

  constructor() { }

  // ngOnChanges(changes: any): void {
  //   if (changes.users) {
  //     this.actualizaPagina()
  //     console.log(changes);
  //   }
  // }

  ngOnInit() { 
    this.actualizaPagina()
  }

  Edit(dato: any, key:string): void {
    this.editar.emit({dato,key});
  }

  delete(email:string){
    console.log(this.users);
    this.users = this.users.filter(user => user.email !== email);
    this.actualizaPagina()
  }


  actualizaPagina() {

    const inicio = (this.paginaActual - 1) * this.cantidad_producto_mostrados;
    this.datos_aux = this.users.slice(inicio, inicio + this.cantidad_producto_mostrados);
    console.log(this.datos_aux);
  }

  newPage(e:any){
    this.paginaActual = e 
    console.log(e);
    this.actualizaPagina();
  }

  retroceder(){
    if (this.paginaActual>1) {
      console.log(this.paginaActual);
      this.paginaActual--
      console.log(this.paginaActual);
      this.actualizaPagina()
    }
  }

}

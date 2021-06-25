import { Component } from '@angular/core';

/* 
 5 iconos con ids diferentes
ngclass = vas a tener que 5 clases verifica cada clase de cada icono
o sino una condicion donde diga si la estrella marca es 5 entonces un if si es el id es menor a 5 pintas
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
  stars = ['1','2','3','4','5']
  selected_star:string = '';

  press(star:string){
    this.selected_star = star
    console.log(this.selected_star)

    /*recorrer del valor máximo al minimo*/ 
    for (let i = 1; i < (parseInt(star)); i++) {
      console.log(i);   
      this.addclass()
    }
  }
  
  
  addclass() { 
   
  }


}



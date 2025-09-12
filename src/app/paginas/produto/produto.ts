import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto',
  imports: [],
  templateUrl: './produto.html',
  styleUrl: './produto.css'
})
export class Produto {

  //Variavel para armazenar o codigo via parametro
  codigo:number = 0;

  //Contrutor
  constructor(private route:ActivatedRoute){
  
  }
   //Executa assim que o compomente for criado
    ngOnInit():void{
      this.codigo = Number(this.route.snapshot.paramMap.get('codigo'));
    }
}



import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {

  //Variavel
  situacaoParametro:string = '';

  //Contrutor
  constructor(private route:ActivatedRoute){}

  //ngOnInit
  ngOnInit():void{
    this.situacaoParametro = this.route.snapshot.paramMap.get('mensagem') || '';
  }

}

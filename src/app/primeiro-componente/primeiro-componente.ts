import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  imports: [],
  templateUrl: './primeiro-componente.html',
  styleUrl: './primeiro-componente.css'
})
export class PrimeiroComponente {

  nome:string = "Carolina";
  media: number = 8;

  pessoa = {
    nome: 'Carolina',
    idade: 42
  }

  mensagem(): string{
    return 'Hello World!'
  }



}

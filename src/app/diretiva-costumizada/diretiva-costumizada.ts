import { Component } from '@angular/core';
import { ApresentacaoDirective } from '../minha-diretiva/apresentacao';

@Component({
  selector: 'app-diretiva-costumizada',
  imports: [ApresentacaoDirective],
  templateUrl: './diretiva-costumizada.html',
  styleUrl: './diretiva-costumizada.css'
})
export class DiretivaCostumizada {

}

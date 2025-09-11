import { Component, signal } from '@angular/core';
import { PrimeiroComponente } from "./primeiro-componente/primeiro-componente";
import { DataBindings } from "./data-bindings/data-bindings";
import { FormsModule } from '@angular/forms';
import { Formulario } from "./formulario/formulario";
import { ControleFluxo } from './controle-fluxo/controle-fluxo';
import { DiretivaStyle } from "./diretiva-style/diretiva-style";
import { DiretivaClass } from "./diretiva-class/diretiva-class";
import { DiretivaCostumizada } from "./diretiva-costumizada/diretiva-costumizada";
import { FormularioReativo } from './formulario-reativo/formulario-reativo';
import { Bootstrap } from "./bootstrap/bootstrap";


@Component({
  selector: 'app-root',
  imports: [Bootstrap],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('curso-angular');
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reativo',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-reativo.html',
  styleUrl: './formulario-reativo.css'
})
export class FormularioReativo {

  //Objeto de formulario
    pessoa = new FormGroup({
      nome : new FormControl('', [Validators.required, Validators.minLength(3)]),
      idade: new FormControl('', [Validators.required, Validators.max(120)])

    });

}

import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';

@Component({
  selector: 'app-projeto-crud',
  imports: [ReactiveFormsModule],
  templateUrl: './projeto-crud.html',
  styleUrl: './projeto-crud.css'
})
export class ProjetoCrud {
  //variavel para trabalhar com a visibilidade dos botoes
  btnCadastrar: boolean = true;

  //Objeto de formulario
  pessoa = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl('', [Validators.required, Validators.max(120)]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)])

  });

  //Vetor para armazenar pessoa
  vetor:Pessoa[] = [];
  
  //Indice de pessoa selecionada
  indicePessoaSelecionada:number = -1;

  //metodo para efetuar o cadastro
  cadastrar():void{
    this.vetor.push(this.pessoa.value as Pessoa);
    this.pessoa.reset();
  }

  //metodo para selecionar uma pessoa especifica
  selecionar(indice:number):void{
    this.indicePessoaSelecionada = indice;

    this.pessoa.get('nome')?.setValue(this.vetor[indice].nome  || '');
    this.pessoa.get('idade')?.setValue(this.vetor[indice].idade?.toString() || '');
    this.pessoa.get('cidade')?.setValue(this.vetor[indice].cidade || '');

    this.btnCadastrar = false;
  }

  //metodo para cancelar as açoes de alteração e remoção
  cancelar():void{
    this.pessoa.reset();

    this.indicePessoaSelecionada = -1;

    this.btnCadastrar = true;
  }
  //metodo para alterar dados
  alterar():void{
    this.vetor[this.indicePessoaSelecionada] = this.pessoa.value as Pessoa;
    this.cancelar();
  }

  //metodo para remover pessoas
  remover():void{
    this.vetor.splice(this.indicePessoaSelecionada, 1);
    this.cancelar();

  }

}

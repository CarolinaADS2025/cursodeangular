import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'situacaoMedia'
})
export class SituacaoMediaPipe implements PipeTransform {

  transform(media:number): string {
    return media > 7 ? 'Aprovado': 'Reprovado';
  }

}

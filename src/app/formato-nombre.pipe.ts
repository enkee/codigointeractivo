import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatenarCurso'
})
export class FormatoNombrePipe implements PipeTransform {

  transform(parametro1: string, parametro2: string): string {
    return "[" + parametro1 + " -- " + parametro2 + "]";
  }

}

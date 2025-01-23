import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nuevoFiltro'
})
export class NuevoFiltroPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

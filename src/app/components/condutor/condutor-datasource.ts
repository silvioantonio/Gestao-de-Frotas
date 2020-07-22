import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

import { Condutor } from './condutor.model';

export class CondutorDataSource extends DataSource<Condutor> {
  data: Condutor[] = [];
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  connect(): Observable<Condutor[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  disconnect() {}

  private getPagedData(data: Condutor[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData(data: Condutor[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'nome': return compare(a.nome, b.nome, isAsc);
        case 'cpf': return compare(a.cpf, b.cpf, isAsc);
        case 'matricula': return compare(a.matricula, b.matricula, isAsc);
        case 'cnh': return compare(a.cnh.numeroCNH, b.cnh.numeroCNH, isAsc);
        case 'validade': return compare(a.cnh.validade, b.cnh.validade, isAsc);
        case 'categoria': return compare(a.cnh.categoriaCnh, b.cnh.categoriaCnh, isAsc);
        case 'cidade': return compare(a.endereco.cidade, b.endereco.cidade, isAsc);
        case 'bairro': return compare(a.endereco.bairro, b.endereco.bairro, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

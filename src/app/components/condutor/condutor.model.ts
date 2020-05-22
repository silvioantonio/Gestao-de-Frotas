import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

export interface Condutor {
  id?: number
  nome: string
  cpf: string
  matricula: number
  numeroCNH: number
  validade: string
  categoriaCnh: string
  cidade: string
  bairro: string
  complemento: string
  numero: string
}


/**
 * Data source for the Read view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ReadDataSource extends DataSource<Condutor> {
  data: Condutor[] = [];
  paginator: MatPaginator;
  sort: MatSort;

  constructor(data: Condutor[]) {
    super();
    this.data = data
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Condutor[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Condutor[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Condutor[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'km': return compare(a.km, b.km, isAsc);
        case 'marca': return compare(a.marca, b.marca, isAsc);
        case 'modelo': return compare(a.modelo, b.modelo, isAsc);
        case 'placa': return compare(a.placa, b.placa, isAsc);
        case 'tipoCombustivel': return compare(a.tipoCombustivel, b.tipoCombustivel, isAsc);
        case 'anoFabricacao': return compare(a.anoFabricacao, b.anoFabricacao, isAsc);
        case 'categoria': return compare(a.categoria, b.categoria, isAsc);
        case 'cor': return compare(a.cor, b.cor, isAsc);
        case 'estadoConservacao': return compare(+a.estadoConservacao, +b.estadoConservacao, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

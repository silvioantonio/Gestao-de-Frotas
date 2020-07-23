import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Veiculo } from "./veiculo.model";

export class ReadDataSource extends DataSource<Veiculo> {
    data: Veiculo[] = [];
    paginator: MatPaginator;
    sort: MatSort;
  
    constructor() {
      super();
    }
  
    connect(): Observable<Veiculo[]> {
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
  
    private getPagedData(data: Veiculo[]) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    }
  
    private getSortedData(data: Veiculo[]) {
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
  
  function compare(a: string | number, b: string | number, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
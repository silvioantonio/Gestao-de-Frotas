import { Condutor } from 'src/app/components/condutor/condutor.model';
import { Veiculo } from 'src/app/components/veiculo/veiculo.model';

export interface Ordem {
  id?: number
  origem: string
  destino: string
  veiculo: Veiculo
  condutor: Condutor
  dataDaViagem: string
  horaDaViagem: string
  status: string
  distanciaPercorrida: number
}

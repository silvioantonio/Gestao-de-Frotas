
export interface Condutor {
  id?: number
  nome: string
  cpf: string
  matricula: number
  cnh:{
    numeroCNH: number
    validade: string
    categoriaCnh: string
  }
  endereco:{
    cidade: string
    bairro: string
    complemento: string
    numero: number
  }

}

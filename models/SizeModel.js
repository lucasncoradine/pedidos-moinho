export class SizeModel {
  type
  description
  amountMeat
  amountGarnish
  price

  constructor({
    tipo,
    descricao,
    quantidadeCarnes,
    quantidadeGuarnicoes,
    valor,
  }) {
    this.type = tipo
    this.description = descricao
    this.amountMeat = quantidadeCarnes
    this.amountGarnish = quantidadeGuarnicoes
    this.price = valor
  }
}

export class SizeModel {
  type
  description
  amountMeat
  amountGarnish
  price
  order
  visible

  constructor({
    Tipo,
    Descricao,
    QuantCarnes,
    QuantGuarnicoes,
    Valor,
    Ordem,
    Exibir,
  }) {
    this.type = Tipo
    this.description = Descricao
    this.amountMeat = QuantCarnes
    this.amountGarnish = QuantGuarnicoes
    this.price = Valor
    this.order = Ordem
    this.visible = Exibir
  }
}

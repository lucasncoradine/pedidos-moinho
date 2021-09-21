export class MenuModel {
  name
  type
  visible

  constructor({ Nome, Tipo, Exibir }) {
    this.name = Nome
    this.type = Tipo
    this.visible = Exibir
  }
}

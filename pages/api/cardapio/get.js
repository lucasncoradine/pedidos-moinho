import { Database, minifyRecords } from "@apis";
import _ from 'lodash';

const table = Database.connectTo("Cardapio")

export default async (req, res) => {
  try {
    const { type } = req.query

    let records

    if (type) records = await table.select({ filterByFormula: `REGEX_MATCH({Tipo}, "${type}")` }).all()
    else records = await table.select().all()

    records = minifyRecords(records).map(x => x.fields).filter(x => x.Exibir)

    const result = _.orderBy(records, ['Tipo', 'Nome'], ['asc', 'asc'])

    res.status(200).json(result)
  } catch (error) {
    res.status(500).json(error)
  }
}
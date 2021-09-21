import Airtable, { Record } from "airtable"

const _apiKey = process.env.AIRTABLE_API_KEY || ""
const _baseId = process.env.AIRTABLE_BASE_ID || ""
const base = new Airtable({ apiKey: _apiKey }).base(_baseId)

export const minifyRecords = (records) => {
  if (!(records instanceof Record)) {
    return records.map(
      (record) =>
      ({
        id: record.id,
        fields: record.fields,
      })
    )
  } else {
    return {
      id: records.id,
      fields: records.fields,
    }
  }
}

export class Database {
  static connectTo = (tableName) => base(tableName)
}
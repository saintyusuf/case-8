export default interface InterfaceProduct {
  Id: number
  CategoryId: number
  Name: string
  Description: string
  ProductSettings: {
    SettingId: number,
    Value: string
  }[]
}
import 'i18next'
import en from './translations/en.json'

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends string
    ? `${Key}`
    : ObjectType[Key] extends object
      ? `${Key}.${NestedKeyOf<ObjectType[Key]>}`
      : never
}[keyof ObjectType & (string | number)]

export type TxKeyPath = NestedKeyOf<typeof en>

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: typeof en
    }
  }
}

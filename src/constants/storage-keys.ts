export const STORAGE_KEYS = {
  LANG: 'lang',
} as const

export type StorageKey = keyof typeof STORAGE_KEYS
export type StorageSchemaKey = keyof typeof STORAGE_KEYS

export type StorageSchema = {
  lang: string
}

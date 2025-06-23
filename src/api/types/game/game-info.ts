export type GameInfoRequest = {
  userId: string
}

export type GameInfoResponse = {
  userId: string
  gameId: string

  username: string
  sex: string
  age: number
}

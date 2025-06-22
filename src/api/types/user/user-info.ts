export type PostUserInfoRequest = {
  deviceId: string
}

export type PostUserInfoResponse = {
  userId: string
  gameId: string

  username: string
  sex: string
  age: number
}

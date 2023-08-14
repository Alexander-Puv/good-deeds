import IDeed from "./deed"

export default interface IUser {
  id: number,
  createdAt: Date,
  email: string,
  username: string,
  tag?: string,
  deeds?: IDeed[]
}

export interface UserData {
  user: IUser,
  accessToken: string,
  refreshToken: string
}

export interface UserCreationAttrs {
  email: string,
  username: string,
  password: string
}
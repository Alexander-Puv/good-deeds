import IDeed from "./deed"

export default interface IUser {
  id: number,
  createdAt: Date,
  email: string,
  username: string,
  tag?: string | null,
  deeds?: IDeed[]
}

export interface UserCreationAttrs {
  email: string,
  username: string,
  password: string
}
export default interface userData {
  id: number,
  createdAt: Date,
  email: string,
  username: string,
  tag?: string,
}

export interface UserCreationAttrs {
  email: string,
  username: string,
  password: string
}
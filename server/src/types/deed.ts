import IUser from "./user";

export default interface IDeed {
  id: number,
  createdAt: Date,
  checked: boolean,
  text: string,
  userId: number,
  user: IUser
}
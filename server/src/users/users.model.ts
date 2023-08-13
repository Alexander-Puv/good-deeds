// import { Column, DataType, Model, Table } from "sequelize-typescript";
// import { UserCreationAttrs } from "src/types/user";

// @Table({tableName: 'users'})
// export class User extends Model<User, UserCreationAttrs> {
//   @Column({type: DataType.STRING, unique: true, autoIncrement: true, primaryKey: true})
//   id: string

//   @Column({type: DataType.STRING, unique: true, allowNull: false})
//   email: string

//   @Column({type: DataType.STRING, allowNull: false})
//   password: string

//   @Column({type: DataType.STRING, allowNull: false})
//   username: string

//   @Column({type: DataType.STRING, unique: true, allowNull: true})
//   tag?: string
// }
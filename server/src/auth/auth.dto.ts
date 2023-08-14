import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, MaxLength } from "class-validator"

export class SignupDto {
  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  username: string

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 6
  })
  @MaxLength(20)
  password: string
}

export interface LoginDto {
  email: string
  password: string
}
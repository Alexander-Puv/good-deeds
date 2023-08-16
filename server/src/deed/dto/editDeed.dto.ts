import { IsBoolean, IsOptional, IsString } from "class-validator";

export class editDeedDto {
  @IsString()
  @IsOptional()
  text?: string

  @IsBoolean()
  @IsOptional()
  checked?: boolean
}
import { IsEmail, IsString } from "class-validator";

export class UserSignIn {
    @IsString()
    readonly name: string
    @IsEmail()
    readonly email: string
    @IsString()
    readonly password: string
    readonly confirm_password: string
    readonly is_active: boolean
}

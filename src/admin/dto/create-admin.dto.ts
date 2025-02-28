export class CreateAdminDto {
    readonly username: string
    readonly email: string
    readonly password: string
    readonly confirm_password: string
    readonly first_name: string
    readonly last_name: string
    readonly is_active: boolean
    readonly is_creator: boolean
}

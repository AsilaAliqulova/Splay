import { IsString } from "class-validator";

export class CreatePaymentMethodDto {
    @IsString()
    readonly name: string
}

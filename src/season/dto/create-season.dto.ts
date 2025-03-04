import { IsInt, IsString, IsDate, IsUrl } from 'class-validator';
export class CreateSeasonDto {

    @IsString()
    title: string;
    @IsInt()
    seriesId: number;
    @IsString()
    description: string;
    @IsInt()
    season_number: number;
    @IsInt()
    total_episodes: number;
    @IsDate()
    release_date: Date;
    @IsUrl()
    trailer_url: string;
}

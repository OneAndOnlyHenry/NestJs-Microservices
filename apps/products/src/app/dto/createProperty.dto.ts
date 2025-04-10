import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreatePropertyDto {
  /**
   * The name of the property. This field is required and must be a non-empty string.
   */
  @IsString()
  @IsNotEmpty()
  name!: string;

  /**
   * A brief description or details about the property.
   * This field is required and must be a non-empty string.
   */
  @IsString()
  @IsNotEmpty()
  description!: string;

  /**
   * Represents the area of a property.
   *
   * @remarks
   * This field is required and must be an integer. Validation ensures
   * that the value is not empty and is of the correct type.
   */
  @IsInt()
  @IsNotEmpty()
  area!: number;
}

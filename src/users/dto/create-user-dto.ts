//it's better to declare dto as a class rather than interface.
//since TS interfaces are removed during the transpilation,
//Nest can't refer to interfaces in runtime
export class CreateUserDto {
  readonly email: string;
  readonly password: string;
}

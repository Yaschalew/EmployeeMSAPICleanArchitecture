export class CustomError{

  constructor(
    private readonly _module: string
  ) {}

  protected handleError(operation: string, err: Error){
    let err_str: string = "In '" + this._module + "' module, '" + operation+ "' Failed!"
    window.alert(err_str + " => " + err.message)
    throw Error(err_str)
  }
}

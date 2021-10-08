export interface Employee {
  id: number,
  fname: string,
  mname: string,
  lname: string,
}

export interface EmployeeNameModel {
  id: number,
  name: string
}

export class EmployeeDto {

  constructor(
    public fname: string,
    public lname: string,
    public mname: string,
    public id?: number
  ){}
}

export class EmployeeModel {
  // id: number = 0
  // fname: string = ''
  // mname: string = ''
  // lname: string = ''

  constructor(
    public fname: string,
    public lname: string,
    public mname?: string,
    public id?: number
  ) { }

  getName(): string {
    return this.fname + ' ' + (!this.mname ? '' : (this.mname + ' ') + this.lname)
  }
}

export class EmployeeMapper {

  public static toModel(employee: EmployeeDto): EmployeeModel {
    if (!employee.id || employee.id <= 0) {
      let err = 'Employee from the server side has no id!'
      window.alert(err)
      throw Error(err)
    }
    return new EmployeeModel(
      employee.fname,
      employee.lname,
      (employee.mname === ''? undefined: employee.mname),
      employee.id
      )
  }

  public static toDto(employee: EmployeeModel): EmployeeDto {
    let employeeDto: EmployeeDto = {} as EmployeeDto
    if(employee.id){
      if(employee.id <= 0) {
        let err = 'Employee id is tampered with!'
        window.alert(err)
        throw Error(err)
      }
    }
    return new EmployeeDto(
      employee.fname,
      employee.lname,
      (!employee.mname? '': employee.mname),
      employee.id
    )
  }
}

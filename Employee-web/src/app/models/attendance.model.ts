export interface Attendance {
  id?: number,
  employee: number,
  loginDateTime: number,
  loginDescription: string,
  logoutDateTime: number,
  logoutDescription: string,
  remark: string,
  entry: boolean
}

const timeOffset = ((new Date()).getTimezoneOffset() * 60000)

export class AttendanceMapper{
  static toDto(attendanceModel: AttendanceModel): AttendanceDto {
    let attendanceDto: AttendanceDto = new AttendanceDto()
    if(attendanceModel.id > 0){
      attendanceDto.id = attendanceModel.id
      attendanceDto.entry = false
    }
    if(attendanceModel.employee <= 0){
      throw Error('Invalid Employee!')
    }
    attendanceDto.employee = attendanceModel.employee
    attendanceDto.loginDateTime = attendanceModel.loginDateTime.valueOf() - timeOffset
    attendanceDto.loginDescription = attendanceModel.loginDescription
    attendanceDto.logoutDateTime = attendanceModel.logoutDateTime.valueOf() -timeOffset
    attendanceDto.logoutDescription = attendanceModel.logoutDescription
    attendanceDto.remark = attendanceModel.remark
    return attendanceDto
  }

  static toModel(attendanceDto: AttendanceDto): AttendanceModel {
    let attendanceModel: AttendanceModel = new AttendanceModel()
    if(attendanceDto.id){
      attendanceModel.id = attendanceDto.id
    }
    if(attendanceDto.employee <= 0){
      throw Error('Invalid Employee!')
    }
    attendanceModel.employee = attendanceDto.employee
    attendanceModel.loginDateTime = new Date(attendanceDto.loginDateTime + timeOffset)
    attendanceModel.loginDescription = attendanceDto.loginDescription
    attendanceModel.logoutDateTime = new Date(attendanceDto.logoutDateTime + timeOffset)
    attendanceModel.logoutDescription = attendanceDto.logoutDescription
    attendanceModel.remark = attendanceDto.remark
    return attendanceModel
  }
}


export class AttendanceDto {
  id?: number
  employee: number = 0
  loginDateTime: number = 0
  loginDescription: string = ''
  logoutDateTime: number = 0
  logoutDescription: string = ''
  remark: string = ''
  entry: boolean = true

  constructor(){}

  toModel(): AttendanceModel {
    let attendanceModel: AttendanceModel = new AttendanceModel()
    if(this.id){
      attendanceModel.id = this.id
    }
    if(this.employee <= 0){
      throw Error('Invalid Employee!')
    }
    attendanceModel.employee = this.employee
    attendanceModel.loginDateTime = ConvertUTCLocal(this.loginDateTime)
    attendanceModel.loginDescription = this.loginDescription
    attendanceModel.logoutDateTime = ConvertUTCLocal(this.logoutDateTime)
    attendanceModel.logoutDescription = this.logoutDescription
    attendanceModel.remark = this.remark
    console.log(attendanceModel)
    return attendanceModel
  }
}

export class AttendanceModel {
  id: number = 0
  employee: number = 0
  loginDateTime: Date = new Date(0)
  loginDescription: string = ''
  logoutDateTime: Date = new Date(0)
  logoutDescription: string = ''
  remark: string = ''

  constructor(){}

  toDto(): AttendanceDto {
    let attendanceDto: AttendanceDto = new AttendanceDto()
    if(this.id > 0){
      attendanceDto.id = this.id
      attendanceDto.entry = false
    }
    if(this.employee <= 0){
      throw Error('Invalid Employee!')
    }
    attendanceDto.employee = this.employee
    attendanceDto.loginDateTime = ConvertLocalToUTC(this.loginDateTime)
    attendanceDto.loginDescription = this.loginDescription
    attendanceDto.logoutDateTime = ConvertLocalToUTC(this.logoutDateTime)
    attendanceDto.logoutDescription = this.logoutDescription
    attendanceDto.remark = this.remark
    return attendanceDto
  }
}

export function ConvertLocalToUTC(dateLocal: Date) {
  return Date.UTC(
    dateLocal.getUTCFullYear(),
    dateLocal.getUTCMonth(),
    dateLocal.getUTCDate(),
    dateLocal.getUTCHours(),
    dateLocal.getUTCMinutes(),
    dateLocal.getUTCSeconds(),
    dateLocal.getUTCMilliseconds()
  ).valueOf()
}

export function ConvertUTCLocal(dateUTC: number) {
  return new Date(new Date(dateUTC).toISOString() + 'UTC')
}

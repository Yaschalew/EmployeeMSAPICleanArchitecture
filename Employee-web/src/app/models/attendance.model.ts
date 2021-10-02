export interface Attendance {
  id: string | undefined,
  employee: string,
  loginDateTime: Date,
  loginDescription: string,
  logoutDateTime: Date,
  logoutDescription: string,
  remark: string,
}

export function mapAttendance(data: any) {
  let attendance: Attendance
  attendance = {
    id: data.id,
    employee: data.employee,
    loginDateTime: new Date(data.loginDateTime),
    loginDescription: data.loginDescription,
    logoutDateTime: new Date(data.logoutDateTime),
    logoutDescription: data.logoutDescription,
    remark: data.remark,
  }
  console.log(attendance)

  return attendance as any
}

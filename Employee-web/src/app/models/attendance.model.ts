export interface Attendance {
  id: number | undefined,
  employee: number,
  loginDateTime: number,
  loginDescription: string,
  logoutDateTime: number,
  logoutDescription: string,
  remark: string,
}

// export function mapAttendance(data: any) {
//   let attendance: Attendance
//   attendance = {
//     id: data.id,
//     employee: data.employee,
//     loginDateTime: new Date(data.loginDateTime).getTime(),
//     loginDescription: data.loginDescription,
//     logoutDateTime: new Date(data.logoutDateTime).getTime(),
//     logoutDescription: data.logoutDescription,
//     remark: data.remark,
//   }
//   console.log(attendance)

//   return attendance as any
// }

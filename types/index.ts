type ResponseData = {
  src: string
  width: number,
  height: number,
}

type SuccessErrorResponse = { 
  success: boolean, 
  error: any
}

type CalculateProps = {
  months: number
  days: number
  hours: number
  minutes: number
  seconds: number
}


export type { ResponseData, SuccessErrorResponse, CalculateProps }

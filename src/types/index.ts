export type RequestLoanResponse = {
  code: number
  result: boolean
  message: string
  transaction_id: string
}

export type RequestLoanData = {
  action: "request_for_loan"
  full_name: string
  loan_amount: string | number
  repayment_duration: string | number
}

export type GetAllLoanResponse = {
  code: number
  result: boolean
  total_search_record: number
  data: {
    ID: string
    TRANSACTION_ID: string
    FULL_NAME: string
    LOAN_AMOUNT: string
    REPAYMENT_DURATION: string
    CREATED_TIME: Date | string
  }[]
}

export type GetAllLoanData = {
  actions: "get_all_loan_request"
  transaction_id: string
}

export type GetPaymentScheduleResponse = {
  code: number
  result: boolean
  message: string
  TRANSACTION_ID: string
  FULL_NAME: string
  LOAN_AMOUNT: string
  REPAYMENT_DURATION: string
  CUMULATIVE_REPAYMENT_AMOUNT: string
  DATE: string | Date
  data: {
    ID: string
    TRANSACTION_ID: string
    LOAN_BALANCE: string
    MONTH_COUNT: string
    EXPECTED_REPAYMENT_AMOUNT: string
    INTEREST: string
    TOTAL_REPAYMENT_AMOUNT: string
  }[]
}

export type GetRepaymentScheduleData = {
  actions: "get_repayment_schedule"
  transaction_id: string
}

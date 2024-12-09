
    export type Root = IWorkflow[]
    export type RootTwo=TimePortionSum[]

    export interface IWorkflow {
      divisionName: string
      employeeName: string
      employeeId: number
      month: string
      epfNumber: number
      basicSalary: number
      serviceYear: number
      totalDailyPaySalary: number
      totalOtAmount: number
      totalPieceRateSalaryAmount: number
      extraPieceRatePercentage: number
      extraPiecerateSalary: number
      totalPieceRateSalaryAmount_Test: number
      extraPieceRatePercentage_Test: number
      extraPiecerateSalary_Test: number
      totalPieceRateHours: number
      totalNormalHours: number
      totalWorkHours: number
      totalNormalSalary: number
      totalPaidSalary: number
      totalEffency: number
      totalEffency_Minus: number
      totalPaidSalary_Test: number
      totalEffency_Test: number
      totalEffency_Minus_Test: number
      basicSalaryTotal: number
      incentiveSalaryTotal: number
      maximumPieceRateValue: number
      standardHourlyWage: number
      maximumHourlyWageRatio: number
      totalOtHours: number
      dailySums: DailySum[]
    }
    
    export interface DailySum {
      inDate: string
      sumPieceRate: number
      sumPieceRate_Test: number
      sumPiecerateHours: number
      sumNormalHours: number
      sumDailyPay: number
      sumPaidSalary: number
      sumPaidSalary_Test: number
      sumDifference: number
      sumDifference_Minus: number
      sumDifference_Test: number
      sumDifference_Minus_Test: number
      dailySumRecordCount: number
      timePortionSums: TimePortionSum[]
    }
    
    export interface TimePortionSum {
      inDate: string
      inTime: string
      outTime: string
      outDate: string
      sectionName: string
      shiftName: string
      t_SumPieceRate: number
      t_SumPieceRate_Test: number
      t_SumDailyPay: number
      t_SumPaidSalary: number
      t_SumPaidSalary_Test: number
      t_SumDifference: number
      t_SumDifference_Minus: number
      t_SumDifference_Test: number
      t_SumDifference_Minus_Test: number
      dailySalary: number
      incentiveSalary: number
      normalHours: number
      overTimeHours: number
      overTimeAmount: number
      timePortionRecordCount: number
      dayDetaiPieceRates: DayDetaiPieceRate[]
    }
    
    export interface DayDetaiPieceRate {
      activityName: string
      numberOfOperators: number
      numberOfHelpers: number
      quantityPerEmployee: number
      rate: number
      testRate: number
      oldRate: number
      payingSalary: number
      testPayingSalary: number
      qty: number
      rateTypeName: string
    }
    
    

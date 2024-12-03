import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WorkflowService } from './workflow.service';

@Component({
  selector: 'app-workflow-pdf',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './workflow-pdf.component.html',
  styleUrl: './workflow-pdf.component.scss'
})
export class WorkflowPDFComponent implements OnInit{
  workFlows!:FormGroup
  constructor(private fb:FormBuilder,private serviceWorkflow: WorkflowService){
    this.workFlows=this.fb.group({
      divisionName:[''],
      employeeName:[''],
      employeeId:[''],
      month:[''],
      epfNumber:[''],
      basicSalary:[''],
      serviceYear:[''],
      totalDailyPaySalary:[''],
      totalOtAmount:[''],
      totalPieceRateSalaryAmount:[''],
      extraPieceRatePercentage:[''],
      extraPiecerateSalary:[''],
      totalPieceRateSalaryAmount_Test:[''],
      extraPieceRatePercentage_Test:[''],
      extraPiecerateSalary_Test:[''],
      totalPieceRateHours:[''],
      totalNormalHours:[''],
      totalWorkHours:[''],
      totalNormalSalary:[''],
      totalEffency:[''],
      totalEffency_Minus:[''],
      totalPaidSalary_Test:[''],
      totalEffency_Test:[''],
      totalEffency_Minus_Test:[''],
      basicSalaryTotal:[''],
      incentiveSalaryTotal:[''],
      maximumPieceRateValue2600:[''],
      standardHourlyWage75:[''],
      maximumHourlyWageRatio:[''],
      totalOtHours:[''],

                dailySums:this.fb.group({
            inDate:[''],
            sumPieceRate: [''],
            sumPieceRate_Test: [''],
            sumPiecerateHours: [''],
            sumNormalHours: [''],
            sumDailyPay: [''],
            sumPaidSalary: [''],
            sumPaidSalary_Test: [''],
            sumDifference: [''],
            sumDifference_Minus: [''],
            sumDifference_Test:[''],
            sumDifference_Minus_Test: [''],
            dailySumRecordCount: [''],
                  }),
                  timePortionSums:this.fb.group({
                    inDate: [''],
                    inTime: [''],
                    outTime:[''],
                    outDate: [''],
                    sectionName: [''],
                    shiftName: [''],
                    t_SumPieceRate:[''],
                    t_SumPieceRate_Test:[''],
                    t_SumDailyPay: [''],
                    t_SumPaidSalary: [''],
                    t_SumPaidSalary_Test: [''],
                    t_SumDifference:[''],
                    t_SumDifference_Minus: [''],
                    t_SumDifference_Test: [''],
                    t_SumDifference_Minus_Test: [''],
                    dailySalary: [''],
                    incentiveSalary: [''],
                    normalHours: [''],
                    overTimeHours: [''],
                    overTimeAmount: [''],
                    timePortionRecordCount: [''],
                  }),
                    dayDetaiPieceRates:this.fb.group({
                      activityName: [''],
                      numberOfOperators:[''],
                      numberOfHelpers:[''],
                      quantityPerEmployee: [''],
                      rate: [''],
                      testRate: [''],
                      oldRate: [''],
                      payingSalary: [''],
                      testPayingSalary: [''],
                      qty: [''],
                      rateTypeName: [''],

                      // activityName:this.fb.group({
                      //   activityName:[''],
                      //   numberOfOperators: [''],
                      //   numberOfHelpers: [''],
                      //   quantityPerEmployee:[''],
                      //   rate: [''],
                      //   testRate: [''],
                      //   oldRate: [''],
                      //   payingSalary: [''],
                      //   testPayingSalary: [''],
                      //   qty:[''],
                      //   rateTypeName: [''],
                      // })
                    }),
                    

                        
    })
  }
  
  datasets:any[]=[]
  ngOnInit(): void {
    this.serviceWorkflow.getAllWorkFlow()
  .subscribe({
    next:res=>{
      this.datasets=res
      console.log("res",this.datasets);
      
    },
    error:err=>console.log(err)
    
  })
  }

  workflow:string='asfs'
}

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
  constructor(private serviceWorkflow: WorkflowService){
  
  }
  
  Root:any[]=[]
  ngOnInit(): void {
    this.serviceWorkflow.getAllWorkFlow()
  .subscribe({
    next:res=>{
      this.Root=res
      console.log("res",this.Root);
      
    },
    error:err=>console.log(err)
    
  })
  }


  workflow:string='asfs'
  dates:number=2
  inTimes:string= "08:00"
  outTimes:string="18:00"
  shift:string="Normal"
  section:string="Dril"
  overTime:string="234.38"
  acvity:string="KBCA 007 - 44.00"
  acvitytwo:string="KBPR 008 - 30.00"
  opHp:string="1:7"
  oTL:string='1'
  
}

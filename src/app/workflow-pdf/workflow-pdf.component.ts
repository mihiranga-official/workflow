import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WorkflowService } from './workflow.service';

@Component({
  selector: 'app-workflow-pdf',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './workflow-pdf.component.html',
  styleUrl: './workflow-pdf.component.scss'
})
export class WorkflowPDFComponent implements OnInit{
  constructor(private serviceWorkflow: WorkflowService)
  
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


}

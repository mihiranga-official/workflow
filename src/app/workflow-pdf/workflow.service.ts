import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IWorkflow } from './workflow';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WorkflowService {

  private baseJson: string = 'assets/tableData.json'
  private https: HttpClient = inject(HttpClient)

  getAllWorkFlow(): Observable<IWorkflow[]> {
    return this.https.get<IWorkflow[]>(this.baseJson)
      .pipe(
        tap(data => console.log("testing", data)
        )
      )

  }
}

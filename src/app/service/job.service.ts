import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobDto, NewJobDto } from '../model/models';
import { WS_JOB } from '../utils/ws.constants';
import { NewJobComponent } from '../jobs/new-job/new-job.component';

@Injectable({
    providedIn: 'root'
})
export class JobService {

    constructor(private http: HttpClient) { }

    listAll(): Observable<JobDto[]> {
        return this.http.get<JobDto[]>(WS_JOB)
    }

    save(job: NewJobDto): Observable<any> {
        return this.http.post<NewJobComponent>(WS_JOB, job)
    }


}
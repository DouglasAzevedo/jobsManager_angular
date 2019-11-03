import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyDto, NewCompanyDto } from '../model/models';
import { WS_COMPANY } from '../utils/ws.constants';
import { Injectable } from '@angular/core';
import { NewCompanyComponent } from '../company/new-company/new-company.component';

@Injectable({
    providedIn: 'root'
})
export class CompanyService {

    constructor(private http: HttpClient) {}

    listAll() : Observable<CompanyDto[]> {
        return this.http.get<CompanyDto[]>(WS_COMPANY)
    }

    save(company : NewCompanyDto) : Observable<any> {
        return this.http.post<NewCompanyComponent>(WS_COMPANY, company)
    }

}
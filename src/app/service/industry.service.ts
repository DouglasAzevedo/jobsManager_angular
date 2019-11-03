import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IndustryDto } from '../model/models';
import { WS_INDUSTRY } from '../utils/ws.constants';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class IndustryService {

    constructor(private http: HttpClient) {}

    listAll() : Observable<IndustryDto[]> {
        return this.http.get<IndustryDto[]>(WS_INDUSTRY)
    }

}
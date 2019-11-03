import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company.service';
import { CompanyDto } from 'src/app/model/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {

  companies : CompanyDto[] = []

  constructor(private CompanyService: CompanyService, private router : Router) { }

  ngOnInit() {
    this.listCompanies()
  }

  listCompanies() {
    this.CompanyService.listAll().subscribe(
      (result) => {
        this.companies = result
      }
    )
  }

  openNewCompany() {
    this.router.navigateByUrl('/new-company');
  }

}

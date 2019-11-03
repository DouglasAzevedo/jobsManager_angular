import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company.service';
import { NewCompanyDto, IndustryDto } from 'src/app/model/models';
import { IndustryService } from 'src/app/service/industry.service';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent implements OnInit {

  industries : IndustryDto[] = [];
  company = new NewCompanyDto;

  constructor(private router : Router,
     private IndustryService : IndustryService,
     private companyService : CompanyService) { }

  ngOnInit() {
    this.listIndustries();
  }

  save() {
    this.companyService.save(this.company).subscribe(
      () => {
        this.router.navigateByUrl('/companies')
      }
    )
  }

  cancel() {
    this.router.navigateByUrl('/companies')
  }

  private listIndustries() {
  this.IndustryService.listAll().subscribe(
    (result) => {
      this.industries = result
    }
  )
 }

}

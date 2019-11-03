import { Component, OnInit } from '@angular/core';
import { CompanyDto, NewJobDto } from 'src/app/model/models';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company.service';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.css']
})
export class NewJobComponent implements OnInit {
  companies : CompanyDto[] = [];
  job = new NewJobDto;

  constructor(private router: Router,
    private CompanyService: CompanyService,
    private JobService: JobService
  ) { }

  ngOnInit() {
    this.listCompanies();
  }

  save() {
    this.JobService.save(this.job).subscribe(
      () => {
        this.router.navigateByUrl('/jobs')
      }
    )
  }

  cancel() {
    this.router.navigateByUrl('/jobs')
  }

  private listCompanies() {
    this.CompanyService.listAll().subscribe(
      (result) => {
        this.companies = result
      }
    )
  }

}

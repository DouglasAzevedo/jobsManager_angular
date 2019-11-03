import { Component, OnInit, Inject } from '@angular/core';
import { JobService } from 'src/app/service/job.service';
import { JobDto } from 'src/app/model/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {

  jobs: JobDto[] = [];

  constructor(private jobService: JobService,
    private router: Router) { }

  ngOnInit() {
    this.listJobs()
  }

  listJobs() {
    this.jobService.listAll().subscribe(
      (result) => {
        this.jobs = result
      }
    )
  }

  openNewJob() {
    this.router.navigateByUrl('/new-job');
  }

}

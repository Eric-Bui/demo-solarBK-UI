import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.sidebar').show();
    $('#navbar_list').hide();
    $('#navbar_detail').show();
  }

}

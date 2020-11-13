import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service'
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  constructor(private adminService : AdminService) { }

  data: any;
  user: any;

  ngOnInit(): void {
    
    this.getListProject();
    this.checkLogin();
  }

  checkLogin() {
    this.user = localStorage.getItem("accessTokAdmin");
    console.log(this.user);
  }

  getListProject() {
    this.adminService.getListProject().subscribe((data : any) => {
      this.data = data.StatusPageData.data;
    })
  }

  getProjectDetail(item) {
    
  }

}

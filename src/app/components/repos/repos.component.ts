import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'gg-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  public myRepos: any;
  public repoName: string = "";
  public repository: any = [];
  constructor(private profileService: ProfileService) { }

  APIRequest() {
    let promise = new Promise((resolve, reject) => {
      this.profileService.searchRepo().subscribe((data) => {
        if (data) {
          resolve(data as string[]);
        }
        else {
          reject("nothing")
        }
      })
    })
    return promise
  }
  findUser(){
    this.profileService.updateRepo(this.repoName);
    this.myRepos= this.profileService.searchRepo().subscribe((data: any)=>{
      this.myRepos = data ['items'];
      console.log(data);
    });
  }
  ngOnInit(): void {
    // this.myRepos = this.APIRequest()
    // console.log(this.myRepos)
    // this.myRepos = this.APIRequest();
    // console.log(this.myRepos['__zone_symbol__value']);
     this.myRepos= this.profileService.searchRepo().subscribe((data)=>{
        this.myRepos = data as string[];
        console.log(data);
      });

  }

}


import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'gg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  
  public myUser:any=[];
  public repos:any=[];
  public username: string = "";

    //inject service
  constructor(private profileService:ProfileService) { 
    
    
  } 
  findUser(){
    this.profileService.updateUser(this.username);
    this.profileService.getUserInfo().subscribe((response: any) =>{
      this.myUser = response;
      console.log(response);
    });
    this.profileService.getUserRepo().subscribe((myRepo: any) =>{
      this.repos = myRepo;
      console.log(myRepo);
    });
  }
  ngOnInit(): void{
    
  }

}
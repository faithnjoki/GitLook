import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private repoName: string;
  /* 
    optional properties to help fetch data from github without limitations
  */
  private clientId = 'af128be61f6f7314682e';
  

  //inject http module once imported

  constructor(private http:HttpClient) { 
    console.log("profile service is now ready");
    this.username = 'enockabere'; //default profile

    console.log ("repos");
    this.repoName = 'Akan-Name';
  }
  //function to collect data from github
  getUserInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientId + "&client_secret=" + environment.clientSecret)
    // use pipe to invoke the map method  so that data collected can be in form of observables
    .pipe(map(data=>{
      return data;
    }));
  }
  getUserRepo(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientId + "&client_secret=" + environment.clientSecret)
    // use pipe to invoke the map method  so that data collected can be in form of observables
    .pipe(map(data=>{
      return data;
    }));
  }
  searchRepo(){
    return this.http.get("https://api.github.com/search/repositories?q=" + this.repoName + "&client_secret=" + environment.clientSecret) 
    .pipe(map(data=>{
      return data;
    }));
  }
  updateUser(username: string){
    this.username = username;

  }
   updateRepo(repoName: string){
      this.repoName = repoName;
   } 
}

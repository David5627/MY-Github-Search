import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import{environment} from '../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid ='db609b1fb4286ada9496';
  private clientsecret ='0c3a8beb709c9a534f0afb4fbf86a8f3214b38e4';
 
  constructor(private http:HttpClient) { 
 
  console.log("service is now ready")
  this.username = 'David5627'; 
  }
getProfileInfo():Observable<any> {
  return this.http.get("https://api.github.com/users/" + this.username +"?access_token=" + environment.myKey)
  .pipe(map(res => res));
}
getProfileRepos():Observable<any> {
  return this.http.get("https://api.github.com/users/" + this.username +"/repos?access_token=" + environment.myKey)
  .pipe(map(res => res));
}
updateProfile(username:string){
this.username = username;
}

}

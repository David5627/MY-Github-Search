import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile:any[];
repos:any;
username:string;
  constructor(private profileSerrvice:ProfileService) {
   
   }
   findProfile(){
    this.profileSerrvice.updateProfile(this.username);

    this.profileSerrvice.getProfileInfo().subscribe(profile =>{
         
      console.log(profile);
      this.profile = profile;
 
    });
    this.profileSerrvice.getProfileRepos().subscribe(repos =>{
      
      console.log(repos);
      this.repos= repos;
 
    });
  }
  ngOnInit(): void {
  }

}

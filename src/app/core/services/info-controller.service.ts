import { Injectable } from '@angular/core';
import {TeamInfoService} from './team-info.service';
import {UserInfoService} from './user-info.service';

@Injectable({
  providedIn: 'root'
})
export class InfoControllerService {

  constructor(private teamInfoService: TeamInfoService,
              private userInfoService: UserInfoService) { }

  public getUserTeam() {
    return this.teamInfoService.getTeamInfo();
  }

  public getTeamOwnerInfo() {
    return this.userInfoService.getUserInfo();
  }
}



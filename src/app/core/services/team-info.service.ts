import {Injectable} from '@angular/core';
import {UserInfoService} from './user-info.service';

@Injectable({
  providedIn: 'root'
})
export class TeamInfoService {

  public getTeamInfo() {
    return 'Some Team Info';
  }
}

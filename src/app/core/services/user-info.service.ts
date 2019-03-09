import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  public getUserInfo() {
    return 'Some User Info';
  }

}

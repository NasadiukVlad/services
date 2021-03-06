import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {LoggerService} from '../../services/logger.service';
import {InfoControllerService} from '../../services/info-controller.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  public orderId: number;

  constructor(private router: Router,
              private loggerService: LoggerService,
              private infoControllerService: InfoControllerService) {
    this.loggerService.logComponentCreation('Home Component');
    console.log(this.infoControllerService.getTeamOwnerInfo());
    console.log(this.infoControllerService.getUserTeam());
  }

  public navigateToOrder() {
    console.log(this.orderId);
    this.router.navigate(['order-data', this.orderId]);
  }

  public navigateToAbout() {
    this.router.navigate(['about'], {queryParams: {'customQuery': 6456, 'secondQueryParam': 200}});
  }
}



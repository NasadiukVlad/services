import { Component, OnInit } from '@angular/core';
import {LoggerService} from '../core/services/logger.service';
import {DataSharedService} from '../shared/services/data-shared.service';
import {DataCoreService} from '../core/services/data-core.service';

@Component({
  selector: 'app-orders',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  constructor(private dataSharedService: DataSharedService,
              private coreDataService: DataCoreService) {
    console.log('Pushed to shared');
    this.dataSharedService.pushElementToArray(100);
    console.log(this.dataSharedService.getArray());
  }
}

import {Component, OnInit} from '@angular/core';
import {LoggerService} from '../core/services/logger.service';
import {DataSharedService} from '../shared/services/data-shared.service';
import {DataCoreService} from '../core/services/data-core.service';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent  {
  constructor(private loggerService: LoggerService,
              private dataSharedService: DataSharedService) {
    console.log(this.dataSharedService.getArray());
  }
}


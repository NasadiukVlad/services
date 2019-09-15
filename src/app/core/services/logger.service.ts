import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private router: Router) { }

  public logComponentCreation(componentName: string) {
    console.log('Component creation:' + componentName);
  }
}


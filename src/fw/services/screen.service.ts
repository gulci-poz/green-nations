import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ScreenService {
  private resizeSource = new Subject<null>();
  resize$ = this.resizeSource.asObservable();

  largeBreakpoint = 800;
  screenWidth = 1000;
  screenHeight = 800;

  constructor() {

    try {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
      window.addEventListener('resize', (event) => this.onResize(event));
    } catch (e) {
      // we use default dimensions
    }
  }

  isLarge(): boolean {
    return this.screenWidth >= this.largeBreakpoint;
  }

  onResize($event): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    // subscribers will get to know that there was screen resize
    this.resizeSource.next();
  }

}

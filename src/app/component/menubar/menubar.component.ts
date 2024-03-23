import { Component } from '@angular/core';
import { Input, OnDestroy, OnInit} from '@angular/core';
import { Observable, fromEvent, timer } from 'rxjs';
import { takeUntil, repeat } from 'rxjs/operators';
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent  {
  badgevisible = true;
  badgevisibility() {
    //this.badgevisible = true;
  }
  
  private intervalId = 0;
  message = '';
  remainingTime !: number;
  remainingTimeString !: string;
  private _seconds = 70;
  
  displayTimer$ !:Observable<number>;  
  
  @Input()
  get seconds(): number {
    return this._seconds;
  }
  set seconds(v) {
    const vFixed = Number(v);
    this._seconds = Number.isNaN(vFixed) ? 11 : vFixed;
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }
  
  ngOnInit() {    
    this.reset();
    this.start();
    
    /* const idleTime$ = timer(0,1000);
    const mouseMove$ = fromEvent<MouseEvent>(document, 'click');
    
    this.displayTimer$ = idleTime$.pipe(
      takeUntil(mouseMove$),
      repeat()
     );    
    
    idleTime$.pipe(takeUntil(mouseMove$),repeat()).subscribe(time=>{      
      console.log(time);      
      if( time == 0 ){
        console.log('OK');
        //this.reset();
        this.clearTimer();
        this.remainingTime = this.seconds;
        this.start();
      }      
    }); */    
    
    // window.addEventListener('keydown', (event) => {
    //   console.log('keydown called');      
    // }); 
    
    window.addEventListener('mousedown', (event) => {
    //   console.log('mousedown called');
       this.reset();  
     });   
  }
  
  ngOnDestroy() {
    this.clearTimer();
  }

  start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
  }
  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.remainingTime} seconds`;
  }
  reset() {
    this.clearTimer();
    this.remainingTime = this.seconds;
    this.remainingTimeString = this.showTimer(this.remainingTime);
    this.message = `Click start button to start the Countdown`;
    this.start();
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        //this.message = 'Blast off!';
        this.remainingTimeString = this.showTimer(this.remainingTime);
        this.clearTimer();
      } else {        
        this.remainingTimeString = this.showTimer(this.remainingTime);
        //this.message = `T-${this.remainingTimeString} seconds and counting`;
      }
    }, 1000);
  }
  
  showTimer(inputSeconds : number){
    const rmins = Math.floor(inputSeconds / 60);
    const rsecs = inputSeconds % 60;    
    return `${rmins.toString().length < 2 ? "0" + rmins : rmins}:${rsecs.toString().length < 2 ? "0" + rsecs : rsecs}`;
  }
}

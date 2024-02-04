import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private isVisableSubject = new BehaviorSubject<boolean>(true);
  public isCounted = new BehaviorSubject<number>(60);
  public isVisable$ = this.isVisableSubject.asObservable();
  public count: number = this.getCount();
  public intervalId: any;

  public getIsVisable(): boolean {
    return this.isVisableSubject.value;
  }

  public getCount(): number {
    return this.isCounted.value;
  }
  public setCount(value: number): void {
    this.isCounted.next(value);
  }

  public setIsVisable(value: boolean): void {
    this.isVisableSubject.next(value);
  }

  public setTimer() {
    if (this.count !== -1)
      this.intervalId = setInterval(() => {
        this.count--;
        this.setCount(this.count);
        console.log(this.count);

        if (this.count === 0) {
          clearInterval(this.intervalId);
        }
      }, 1000);
  }

  public stopTimer() {
    clearInterval(this.intervalId);
  }
}

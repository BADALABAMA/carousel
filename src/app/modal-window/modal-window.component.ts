import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ProductService } from '../product.service';
import { ModalService } from '../modal.service';
import { IProduct } from '../interfaces/IProduct';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrl: './modal-window.component.scss',
})
export class ModalWindowComponent implements OnInit, OnDestroy {
  public count$: Observable<number> = this.modalService.isCounted;
  public onDestroy$ = new Subject<void>();
  constructor(
    private productService: ProductService,
    private modalService: ModalService
  ) {}
  ngOnInit(): void {
    this.modalService.setTimer();
    this.modalService.isVisable$.subscribe((isVisable) => {
      console.log('Modal visibility changed:', isVisable);
    });

    this.count$.pipe(takeUntil(this.onDestroy$)).subscribe((count) => {
      console.log('Count changed:', count);
      if (count === 0) {
        this.modalService.setIsVisable(false);
      }
    });
  }

  ngOnDestroy(): void {
    console.log('Component destroyed');
    this.modalService.stopTimer();
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  toggle(): void {
    const currentVisability = this.modalService.getIsVisable();
    this.modalService.setIsVisable(!currentVisability);
  }

  public product?: IProduct = this.productService.getProductById(2);
}

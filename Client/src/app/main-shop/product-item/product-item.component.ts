import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from 'src/app/shared/interfaces/category';
import { IProduct } from 'src/app/shared/interfaces/product';
import { IStore } from 'src/app/shared/interfaces/store';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product : IProduct;

  constructor() { }

  ngOnInit(): void {
  }

}

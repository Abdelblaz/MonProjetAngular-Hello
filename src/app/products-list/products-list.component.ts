import { Component, OnInit } from '@angular/core';
import { IProduct } from '../domain/iproduct';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  data: IProduct[];
  compteur: number;

  constructor(private _service: ProductsService ) { }

  ngOnInit() {

    this._service.getProduct().subscribe(
      res => this.data = res,
     erreur => console.log('ATTENTION il y\'a l\'erreur :' + erreur));
    }
  }

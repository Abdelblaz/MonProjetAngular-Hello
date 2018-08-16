import { Injectable } from '@angular/core';
import { IProduct } from '../domain/iproduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

   // tslint:disable-next-line:max-line-length
   // tslint:disable-next-line:no-inferrable-types permet de mettre pour string car en vrai pas besoin URL = 'http://localhost:8080/produits/'; ca marche aussi
   URL: string = 'http://localhost:8080/produits/';

  constructor(private _Http: HttpClient) { }

  getProduct(): Observable<IProduct[]> {
    return  this._Http.get<IProduct[]>(this.URL);
  }
}

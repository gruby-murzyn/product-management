import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { IProduct } from './product-list/product';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _productUrl = './assets/api/products/products.json';
  constructor(public _http: Http) { }
  private extractData(res: Response) {
    // tslint:disable-next-line:prefer-const
    let body = res;
    return body || {};
  }
  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts().pipe(
      map((products: IProduct[]) => products.find(p => p.productId === id))
    );
  }
  getProducts(): Observable<IProduct[]> {
    return this._http.get(this._productUrl)
        .pipe(map((response: Response) => <IProduct[]> response.json())
        , catchError(this.handleError));
}


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}

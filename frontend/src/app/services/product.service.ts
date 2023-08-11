import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    const url = `${environment.apiUrl}/api/getProducts`;
    return this.http.get(url);
  }

  getProduct(id: string) {
    const url = `${environment.apiUrl}/api/product/${id}`;
    return this.http.get(url);
  }
}

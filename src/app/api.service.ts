import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  async post(url: string, data?: any) {
    try {
      const pstVal = await this.http.post(url, data, {
        headers: {
        },
      }).toPromise();
      return pstVal;
    } catch (s) {
      return null;
    }
  }
  // tslint:disable-next-line:typedef
  async get(url: string){
    try {
      return this.http.get(url).toPromise();
    }
    catch (s) {
      return null;
    }
  }
}

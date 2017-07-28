import {Component, Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Item } from './Item';
import 'rxjs/add/operator/map';


/*
  Generated class for the CloudFundingItemsServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/


@Injectable()
export class CloudFundingItemsServiceProvider {

    private thisUrl = 'pages/heroes';  // URL to web api

    constructor(private http: Http) {
    console.log('Hello CloudFundingItemsServiceProvider Provider');
  }

    getData(): Observable<Item[]> {
        return this.http.get('http://localhost/scraping/test_api.php')
            .map(response => response.json().data as Item[])
            .catch(this.handleError);
        // .map((res) => {
            //     return res.json();
            // });
            //.map(response => response.json().data as Item[]);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}

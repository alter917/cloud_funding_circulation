import {Component, Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Item } from './Item';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

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
            //.toPromise()
            .map((response) => {
                console.log("test2:" + typeof(response));
                console.log("test3:" + response);
                var test = response.json();
                console.log("test4:" + test['id']);
                console.log("test5:" + response.json()['id']);
                //return (Item)response.json();
                return (response.json() as Item[]);
            //response.json().data as Item[]
            });
            //.catch(this.handleError);
            //.subscribe(response => response.json().data as Item[]);
            //.catch(this.handleError);
        // .map((res) => {
            //     return res.json();
            // });
            //.map(response => response.json().data);
            //.catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    // private extractData(res: Response) {
    //     if (res.status < 200 || res.status >= 300) {
    //         throw new Error('Bad response status: ' + res.status);
    //     }
    //     let body = res.json();
    //     return body.data || { };
    // }

}

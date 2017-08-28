import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CloudFundingItemsServiceProvider } from '../../providers/cloud-funding-items-service/cloud-funding-items-service';
import { Item } from '../../providers/cloud-funding-items-service/Item';


interface Friend {
    id: number,
    name: string,
    age: number,
    address: string
}


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
  providers: [
      CloudFundingItemsServiceProvider // 自作のテストサービスクラス
  ]
})

export class HelloIonicPage implements OnInit{
    public items: Item[];
    mmm: Friend[] = [
    { id: 1, "name": "相田", "age": 20 ,"address": "東京都品川区"},
    ];

  constructor(private test:CloudFundingItemsServiceProvider) {

  }

    ngOnInit(): void {
        console.log('ngOnInit');
        //this.test.getData().map(items => this.items = items,);
        this.test.getData().subscribe((items) =>{
            this.items = items;
        },(error) => {
            console.log("error come in");
        });
    }


}

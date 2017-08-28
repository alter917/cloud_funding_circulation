import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';
import { CloudFundingItemsServiceProvider } from '../../providers/cloud-funding-items-service/cloud-funding-items-service';
import { Item } from '../../providers/cloud-funding-items-service/Item';

@Component({
    selector: 'page-list',
    templateUrl: 'list.html',
    providers: [
        CloudFundingItemsServiceProvider // ����Υƥ��ȥ����ӥ����饹
    ]
})
export class ListPage {
    icons: string[];
    //items: Array<{ title: string, note: string, icon: string }>;
    items: Item[];

    constructor(public navCtrl: NavController, public navParams: NavParams, private test:CloudFundingItemsServiceProvider) {
        // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
        //     'american-football', 'boat', 'bluetooth', 'build'];

        // this.items = [];
        // for (let i = 1; i < 11; i++) {
        //     this.items.push({
        //         title: 'Item ' + i,
        //         note: 'This is item #' + i,
        //         icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        //     });
        // }
        this.getData();
    }

    itemTapped(event, item) {
        this.navCtrl.push(ItemDetailsPage, {
            item: item
        });
    }

    getData() {
        this.items = [];
        this.test.getData().subscribe((items) =>{
            //console.log("test2:" + typeof(items));
            //console.log("test3:" + items);
            this.items = items;
        },(error) => {
            console.log("error come in");
        });
    }

    // ngOnInit() {
    //     this.test.getData().subscribe((items) =>{
    //         console.log("test2:" + typeof(items));
    //         console.log("test3:" + items);
    //         this.items = items;
    //     },(error) => {
    //         console.log("error come in");
    //     });
    // }
}

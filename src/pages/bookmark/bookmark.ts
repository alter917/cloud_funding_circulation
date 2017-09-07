import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the BookmarkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

interface BookmarkItem {
    id: number;
    title: string;
    amount: number;
}

@Component({
    selector: 'page-bookmark',
    templateUrl: 'bookmark.html',
})

export class BookmarkPage {
    bookItems: BookmarkItem[] = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.bookItems = [
            {id: 1, title: 'sample book1', amount: 1000},
            {id: 2, title: 'sample book2', amount: 2000},
            {id: 3, title: 'sample book3', amount: 3000},
            {id: 4, title: 'sample book4', amount: 4000},
            {id: 5, title: 'sample book5', amount: 5000},
            {id: 6, title: 'sample book6', amount: 6000},
        ];
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BookmarkPage');
    }

}

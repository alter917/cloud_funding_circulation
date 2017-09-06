import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ConfigPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
    selector: 'page-config',
    templateUrl: 'config.html',
})
export class ConfigPage {
    items: Array<{ icon: string, title: string }>;


    constructor(public navCtrl: NavController, public navParams: NavParams) {
        for (let i = 0; i < 5; i++) {
            this.items.push({icon: 'book', title: 'sample title' + i});
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ConfigPage');
    }

}

import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ConfigPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

interface Item {
    icon: string;
    title: string;
}

@Component({
    selector: 'page-config',
    templateUrl: 'config.html',
})
export class ConfigPage {
    items: Item[] = [];
    iconList: Array<string> = ['add','book','body','browsers','bug'];
    test1: string;
    test2: string;
    test3: string;
    isToggled: boolean;
    test: boolean;


    constructor(public navCtrl: NavController, public navParams: NavParams) {
        for (let i = 0; i < 5; i++) {
            this.items.push({icon: this.iconList[i], title: 'sample title' + i});
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ConfigPage');
    }

    displayDetail() {
        console.log("test1:" + this.test1);
        console.log("test2:" + this.test2);
        console.log("test3:" + this.test3);
        console.log("test4:" + this.isToggled);
        this.test = this.isToggled;
    }
}

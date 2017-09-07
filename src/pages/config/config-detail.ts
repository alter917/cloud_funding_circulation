/**
 * Created by ecodev03 on 2017/09/07.
 */
import {Component, Input} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
    selector: "config-detail",
    templateUrl: 'config-detail.html',
})

// コンポーネントクラス定義
export class ConfigDetail {
    @Input("config") configChild: boolean;
}
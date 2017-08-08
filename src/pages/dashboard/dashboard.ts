import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Utility } from '../../providers/utility';

import { HomePage } from '../home/home';

import { SourcesData } from '../../providers/sources-data';

import { App } from 'ionic-angular';
/**
 * Generated class for the Dashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class Dashboard {

    sources = [];
 
    constructor(public app: App, public sourcesData: SourcesData, public utility: Utility,public navParams: NavParams) {
 
        
 
    }

    ionViewDidLoad() {
        this.app.setTitle('Source');    
        this.updateHangout();
    }

    updateHangout() {
        //Show loading
        var loading = this.utility.getLoader();
        loading.present();

        this.sourcesData.getSources().subscribe(data => {
        
        this.sources = data;

        //Hide loading
        setTimeout(function(){
            loading.dismiss();
        },1000);

        });
    
    }

    goToHome(item) {
        let nav = this.app.getRootNav();
        nav.push(HomePage, item);
    }

 
    

}

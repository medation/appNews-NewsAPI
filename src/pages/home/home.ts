import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Utility } from '../../providers/utility';
import { App } from 'ionic-angular';

import { NewsApiGlobal } from '../../models/newsapi-global.model';
import { NewsApiService } from '../../services/newsapi.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  order : any;
  source : any;
  news: NewsApiGlobal = new NewsApiGlobal();
    
  constructor(public app: App, public navCtrl: NavController, public utility: Utility, private newsApiService: NewsApiService, public navParams: NavParams) {
    // J'ai déplacé la récupération des articles dans une méthode appropriée
    this.source = navParams.data;
    this.order = "top";
    this.getArticles(null);
  }

  ionViewDidLoad() {
        this.app.setTitle('News');    
        this.updateHangout();
  }

  updateHangout() {
      //Show loading
      var loading = this.utility.getLoader();
      loading.present();

      setTimeout(function(){
          loading.dismiss();
      },1000);
  
  }

  // Chargement des articles
  public getArticles(refresher) {
    this.newsApiService.getArticles(this.source, this.order)
    .then(newsFetched => {
      this.news = newsFetched;

      // Si la variable refresher est null alors on ne fait rien
      (refresher) ? refresher.complete() : null;
      console.log('Données récupérées depuis le serveur !');
    });
  }


}

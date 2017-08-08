import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


@Injectable()
export class SourcesData {
  data: any;

  constructor(public http: Http) { }

  load(): any {
    if (this.data) {
      return Observable.of(this.data);
    } else {
      return this.http.get('assets/data/sources.json')
        .map(this.processData);
    }
  }

  processData(data) {
    this.data = data.json();
    return this.data;
  }

  getSources() {
    return this.load().map(data => {
      return data.sources;
    });
  }

  getSourcesById(i : String) {
    return this.load().map(data => {
      return data.sources;
    });
  }

  getMap() {
    return this.load().map(data => {
      return data.map;
    });
  }

}

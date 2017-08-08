// Core components
import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { NewsApiGlobal } from '../models/newsapi-global.model';

@Injectable()
export class NewsApiService {

    private baseUrl: string = 'https://newsapi.org/v1/';
    private source: string = 'ign';
    private apiKey: string = 'b05b82df8227454084040393216807ca';
    
    constructor(private http: Http) {

	}

    public getArticles(sourceName, order): Promise<NewsApiGlobal> {
		const url = `${this.baseUrl}articles?source=${sourceName}&sortBy=${order}&apiKey=${this.apiKey}`;
        
        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as NewsApiGlobal)
        .catch(error => console.log('Une erreur est survenue ' + error))
    }

}
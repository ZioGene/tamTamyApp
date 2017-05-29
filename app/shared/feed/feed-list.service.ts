import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { Config } from '../config';
import { UserService } from '../user/user.service';
import { IFeed } from './i-feed';


@Injectable()
export class FeedListService {

    constructor(private http: Http, private userService: UserService) {
    }

    getFeeds(limit: number = 2, groupId: string = '148'): Observable<IFeed> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.get(
            Config.apiUrl + `feed.json?token=${this.userService.token}&groupId=${groupId}&limit=${limit}`,
            {headers: headers}
        )
            .map(response => response.json() as IFeed)
            .do((data: IFeed) => console.log(data))
            .catch(this.handleErrors);
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}
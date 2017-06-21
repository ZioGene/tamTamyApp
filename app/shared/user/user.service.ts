import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { User } from './user';
import { Config } from '../config';
import { IUserLogin } from './i-user-login';

@Injectable()
export class UserService {

    private sessionToken:string;

    constructor(private http: Http) {
    }

    login(user: User): Observable<IUserLogin> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.get(
            Config.apiUrl + `login.json?userid=${user.userid}&password=${user.password}&appName=tamTamyApp`,
            {headers: headers}
        )
            .map(response => response.json() as IUserLogin)
            .do((data: IUserLogin) => {
                //console.log(data);
                this.sessionToken = data.token;
            })
            .catch(this.handleErrors);
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }

    get token():string {
        return this.sessionToken;
    }


    getFeeds(token: string): Observable<IUserLogin> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.get(
            Config.apiUrl + `feed.json?token=${token}&startOffset=100&limit=10`,
            {headers: headers}
        )
            .map(response => response.json())
            .do((data) => {
                console.log(data);
            })
            .catch(this.handleErrors);
    }
}
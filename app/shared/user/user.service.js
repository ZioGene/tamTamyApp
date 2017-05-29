"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/catch");
var config_1 = require("../config");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.login = function (user) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(config_1.Config.apiUrl + ("login.json?userid=" + user.userid + "&password=" + user.password + "&appName=tamTamyApp"), { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) {
            console.log(data);
            _this.sessionToken = data.token;
        })
            .catch(this.handleErrors);
    };
    UserService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    Object.defineProperty(UserService.prototype, "token", {
        get: function () {
            return this.sessionToken;
        },
        enumerable: true,
        configurable: true
    });
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;

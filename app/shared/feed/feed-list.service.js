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
var user_service_1 = require("../user/user.service");
var FeedListService = (function () {
    function FeedListService(http, userService) {
        this.http = http;
        this.userService = userService;
    }
    FeedListService.prototype.getFeeds = function (limit, groupId) {
        if (limit === void 0) { limit = 2; }
        if (groupId === void 0) { groupId = '148'; }
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(config_1.Config.apiUrl + ("feed.json?token=" + this.userService.token + "&groupId=" + groupId + "&limit=" + limit), { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.handleErrors);
    };
    FeedListService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return FeedListService;
}());
FeedListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, user_service_1.UserService])
], FeedListService);
exports.FeedListService = FeedListService;

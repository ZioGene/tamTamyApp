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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmZWVkLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBOEM7QUFDOUMsOEJBQXFDO0FBRXJDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFDL0IscUNBQW1DO0FBQ25DLG1DQUFpQztBQUVqQyxvQ0FBbUM7QUFDbkMscURBQW1EO0FBS25ELElBQWEsZUFBZTtJQUV4Qix5QkFBb0IsSUFBVSxFQUFVLFdBQXdCO1FBQTVDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUNoRSxDQUFDO0lBRUQsa0NBQVEsR0FBUixVQUFTLEtBQWlCLEVBQUUsT0FBdUI7UUFBMUMsc0JBQUEsRUFBQSxTQUFpQjtRQUFFLHdCQUFBLEVBQUEsZUFBdUI7UUFDL0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRW5ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDaEIsZUFBTSxDQUFDLE1BQU0sSUFBRyxxQkFBbUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLGlCQUFZLE9BQU8sZUFBVSxLQUFPLENBQUEsRUFDN0YsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQ3JCO2FBQ0ksR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBVyxFQUF4QixDQUF3QixDQUFDO2FBQ3pDLEVBQUUsQ0FBQyxVQUFDLElBQVcsSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLENBQUM7YUFDdEMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsc0NBQVksR0FBWixVQUFhLEtBQWU7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQztBQXRCWSxlQUFlO0lBRDNCLGlCQUFVLEVBQUU7cUNBR2lCLFdBQUksRUFBdUIsMEJBQVc7R0FGdkQsZUFBZSxDQXNCM0I7QUF0QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xyXG5cclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcblxyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uL3VzZXIvdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSUZlZWQgfSBmcm9tICcuL2ktZmVlZCc7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmVlZExpc3RTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmVlZHMobGltaXQ6IG51bWJlciA9IDIsIGdyb3VwSWQ6IHN0cmluZyA9ICcxNDgnKTogT2JzZXJ2YWJsZTxJRmVlZD4ge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXHJcbiAgICAgICAgICAgIENvbmZpZy5hcGlVcmwgKyBgZmVlZC5qc29uP3Rva2VuPSR7dGhpcy51c2VyU2VydmljZS50b2tlbn0mZ3JvdXBJZD0ke2dyb3VwSWR9JmxpbWl0PSR7bGltaXR9YCxcclxuICAgICAgICAgICAge2hlYWRlcnM6IGhlYWRlcnN9XHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSBhcyBJRmVlZClcclxuICAgICAgICAgICAgLmRvKChkYXRhOiBJRmVlZCkgPT4gY29uc29sZS5sb2coZGF0YSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgIH1cclxufSJdfQ==
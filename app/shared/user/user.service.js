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
            //console.log(data);
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
    UserService.prototype.getContent = function (token) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(config_1.Config.apiUrl + ("content.json?token=" + token + "&startOffset=") + config_1.Config.startOffsetContent + "&limit=" + config_1.Config.limitContent + "&" + config_1.Config.groupId, { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) {
            console.log(data);
        })
            .catch(this.handleErrors);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUE4QztBQUM5Qyw4QkFBcUM7QUFDckMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUMvQixxQ0FBbUM7QUFDbkMsbUNBQWlDO0FBSWpDLG9DQUFtQztBQUluQyxJQUFhLFdBQVc7SUFJcEIscUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQzlCLENBQUM7SUFFRCwyQkFBSyxHQUFMLFVBQU0sSUFBVTtRQUFoQixpQkFjQztRQWJHLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVuRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2hCLGVBQU0sQ0FBQyxNQUFNLElBQUcsdUJBQXFCLElBQUksQ0FBQyxNQUFNLGtCQUFhLElBQUksQ0FBQyxRQUFRLHdCQUFxQixDQUFBLEVBQy9GLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUNyQjthQUNJLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQWdCLEVBQTdCLENBQTZCLENBQUM7YUFDOUMsRUFBRSxDQUFDLFVBQUMsSUFBZ0I7WUFDakIsb0JBQW9CO1lBQ3BCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNuQyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsc0JBQUksOEJBQUs7YUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBR0QsZ0NBQVUsR0FBVixVQUFXLEtBQWE7UUFDcEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRW5ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDaEIsZUFBTSxDQUFDLE1BQU0sSUFBRyx3QkFBc0IsS0FBSyxrQkFBZSxDQUFBLEdBQUMsZUFBTSxDQUFDLGtCQUFrQixHQUFDLFNBQVMsR0FBQyxlQUFNLENBQUMsWUFBWSxHQUFDLEdBQUcsR0FBRSxlQUFNLENBQUMsT0FBTyxFQUN0SSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FDckI7YUFDSSxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLEVBQUUsQ0FBQyxVQUFDLElBQUk7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQS9DRCxJQStDQztBQS9DWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7cUNBS2lCLFdBQUk7R0FKckIsV0FBVyxDQStDdkI7QUEvQ1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgeyBDb250ZW50IH0gZnJvbSAnLi4vZmVlZC9jb250ZW50JztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHsgSVVzZXJMb2dpbiB9IGZyb20gJy4vaS11c2VyLWxvZ2luJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIHNlc3Npb25Ub2tlbjpzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4odXNlcjogVXNlcik6IE9ic2VydmFibGU8SVVzZXJMb2dpbj4ge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXHJcbiAgICAgICAgICAgIENvbmZpZy5hcGlVcmwgKyBgbG9naW4uanNvbj91c2VyaWQ9JHt1c2VyLnVzZXJpZH0mcGFzc3dvcmQ9JHt1c2VyLnBhc3N3b3JkfSZhcHBOYW1lPXRhbVRhbXlBcHBgLFxyXG4gICAgICAgICAgICB7aGVhZGVyczogaGVhZGVyc31cclxuICAgICAgICApXHJcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpIGFzIElVc2VyTG9naW4pXHJcbiAgICAgICAgICAgIC5kbygoZGF0YTogSVVzZXJMb2dpbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvblRva2VuID0gZGF0YS50b2tlbjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0b2tlbigpOnN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Vzc2lvblRva2VuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRDb250ZW50KHRva2VuOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENvbnRlbnQ+IHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxyXG4gICAgICAgICAgICBDb25maWcuYXBpVXJsICsgYGNvbnRlbnQuanNvbj90b2tlbj0ke3Rva2VufSZzdGFydE9mZnNldD1gK0NvbmZpZy5zdGFydE9mZnNldENvbnRlbnQrYCZsaW1pdD1gK0NvbmZpZy5saW1pdENvbnRlbnQrYCZgKyBDb25maWcuZ3JvdXBJZCxcclxuICAgICAgICAgICAge2hlYWRlcnM6IGhlYWRlcnN9XHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmRvKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxufSJdfQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("./shared/user/user");
var user_service_1 = require("./shared/user/user.service");
var AppComponent = (function () {
    function AppComponent(ueserService) {
        this.ueserService = ueserService;
        this.isLoggingIn = false;
        this.user = new user_1.User();
    }
    AppComponent.prototype.login = function () {
        var _this = this;
        console.log("hello");
        this.ueserService.login(this.user)
            .subscribe(function (data) {
            alert(data.token);
            _this.isLoggingIn = true;
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n        <StackLayout>\n            <Image src=\"res://logo_login\" stretch=\"none\" horizontalAlignment=\"center\"></Image>\n            <TextField hint='UserID' keyboardType='email' [(ngModel)]=\"user.userid\"\n                       autocorrect='false' autocapitalizationType='none'></TextField>\n            <TextField hint='Password'  secure='true' [(ngModel)]=\"user.password\"></TextField>\n\n            <Button text='Login' (tap)=\"login()\" class=\"submit-button\"></Button>\n        </StackLayout>\n    ",
        styleUrls: ['pages/login/login-common.css', 'pages/login/login.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AppComponent);
exports.AppComponent = AppComponent;

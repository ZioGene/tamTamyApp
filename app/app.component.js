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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMkNBQTBDO0FBQzFDLDJEQUF5RDtBQWlCekQsSUFBYSxZQUFZO0lBSXJCLHNCQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUY3QyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUdoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELDRCQUFLLEdBQUw7UUFBQSxpQkFTQztRQVJHLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUM3QixTQUFTLENBQ04sVUFBQyxJQUFnQjtZQUNiLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEIsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDNUIsQ0FBQyxDQUNKLENBQUM7SUFDVixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBbEJELElBa0JDO0FBbEJZLFlBQVk7SUFkeEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxxZ0JBU1Q7UUFDRCxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQztLQUN2RSxDQUFDO3FDQUtvQywwQkFBVztHQUpwQyxZQUFZLENBa0J4QjtBQWxCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3NoYXJlZC91c2VyL3VzZXJcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSVVzZXJMb2dpbiB9IGZyb20gJy4vc2hhcmVkL3VzZXIvaS11c2VyLWxvZ2luJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9sb2dvX2xvZ2luXCIgc3RyZXRjaD1cIm5vbmVcIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCI+PC9JbWFnZT5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgaGludD0nVXNlcklEJyBrZXlib2FyZFR5cGU9J2VtYWlsJyBbKG5nTW9kZWwpXT1cInVzZXIudXNlcmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3Q9J2ZhbHNlJyBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPSdub25lJz48L1RleHRGaWVsZD5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgaGludD0nUGFzc3dvcmQnICBzZWN1cmU9J3RydWUnIFsobmdNb2RlbCldPVwidXNlci5wYXNzd29yZFwiPjwvVGV4dEZpZWxkPlxuXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9J0xvZ2luJyAodGFwKT1cImxvZ2luKClcIiBjbGFzcz1cInN1Ym1pdC1idXR0b25cIj48L0J1dHRvbj5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWydwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzJywgJ3BhZ2VzL2xvZ2luL2xvZ2luLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgdXNlcjogVXNlcjtcbiAgICBpc0xvZ2dpbmdJbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1ZXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgfVxuXG4gICAgbG9naW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4gICAgICAgIHRoaXMudWVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKGRhdGE6IElVc2VyTG9naW4pID0+ICB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEudG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH1cbn0iXX0=
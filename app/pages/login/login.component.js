"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var LoginComponent = (function () {
    function LoginComponent(router, page, userService) {
        this.router = router;
        this.page = page;
        this.userService = userService;
        this.isLoggingIn = false;
        this.user = new user_1.User();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log("hello");
        this.userService.login(this.user)
            .subscribe(function (data) {
            alert(data.token);
            console.log(JSON.stringify(data));
            _this.isLoggingIn = true;
            _this.router.navigate(["/list"]);
        }, function (error) { return alert("Error!"); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n        <StackLayout>\n            <Image src=\"res://logo_login\" stretch=\"none\" horizontalAlignment=\"center\"></Image>\n            <TextField hint='UserID' keyboardType='email' [(ngModel)]=\"user.userid\"\n                       autocorrect='false' autocapitalizationType='none'></TextField>\n            <TextField hint='Password'  secure='true' [(ngModel)]=\"user.password\"></TextField>\n\n            <Button text='Login' (tap)=\"login()\" class=\"submit-button\"></Button>\n        </StackLayout>\n    ",
        styleUrls: ['pages/login/login-common.css', 'pages/login/login.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page, user_service_1.UserService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELCtDQUE4QztBQUM5QywrREFBNkQ7QUFFN0QsMENBQXlDO0FBQ3pDLGdDQUErQjtBQWdCL0IsSUFBYSxjQUFjO0lBSXZCLHdCQUFvQixNQUFjLEVBQVUsSUFBVSxFQUFVLFdBQXdCO1FBQXBFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFGeEYsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFHaEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQUEsaUJBWUM7UUFYRyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDNUIsU0FBUyxDQUNOLFVBQUMsSUFBZ0I7WUFDYixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDLEVBQ0QsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQWYsQ0FBZSxDQUM3QixDQUFDO0lBQ1YsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQztBQXpCWSxjQUFjO0lBZDFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUscWdCQVNUO1FBQ0QsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7S0FDdkUsQ0FBQztxQ0FLOEIsZUFBTSxFQUFnQixXQUFJLEVBQXVCLDBCQUFXO0dBSi9FLGNBQWMsQ0F5QjFCO0FBekJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSVVzZXJMb2dpbiB9IGZyb20gJy4uLy4uL3NoYXJlZC91c2VyL2ktdXNlci1sb2dpbic7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cInJlczovL2xvZ29fbG9naW5cIiBzdHJldGNoPVwibm9uZVwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj48L0ltYWdlPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9J1VzZXJJRCcga2V5Ym9hcmRUeXBlPSdlbWFpbCcgWyhuZ01vZGVsKV09XCJ1c2VyLnVzZXJpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3Q9J2ZhbHNlJyBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPSdub25lJz48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgPFRleHRGaWVsZCBoaW50PSdQYXNzd29yZCcgIHNlY3VyZT0ndHJ1ZScgWyhuZ01vZGVsKV09XCJ1c2VyLnBhc3N3b3JkXCI+PC9UZXh0RmllbGQ+XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9J0xvZ2luJyAodGFwKT1cImxvZ2luKClcIiBjbGFzcz1cInN1Ym1pdC1idXR0b25cIj48L0J1dHRvbj5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgYCxcclxuICAgIHN0eWxlVXJsczogWydwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzJywgJ3BhZ2VzL2xvZ2luL2xvZ2luLmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIHVzZXI6IFVzZXI7XHJcbiAgICBpc0xvZ2dpbmdJbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIChkYXRhOiBJVXNlckxvZ2luKSA9PiAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbGlzdFwiXSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiBhbGVydChcIkVycm9yIVwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59Il19
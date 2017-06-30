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
        this.page.backgroundImage = "~/resources/images/social2.jpg";
        this.page.css = 'page {background-size: cover; background-position: center; background-repeat: no-repeat;}';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log("login");
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
        templateUrl: "pages/login/login.html",
        styleUrls: ['pages/login/login-common.css', 'pages/login/login.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page, user_service_1.UserService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELCtDQUE4QztBQUM5QywrREFBNkQ7QUFFN0QsMENBQXlDO0FBQ3pDLGdDQUErQjtBQU8vQixJQUFhLGNBQWM7SUFJdkIsd0JBQW9CLE1BQWMsRUFBVSxJQUFVLEVBQVUsV0FBd0I7UUFBcEUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUZ4RixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUdoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsZ0NBQWdDLENBQUM7UUFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsMkZBQTJGLENBQUM7SUFDaEgsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFBQSxpQkFZQztRQVhHLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUM1QixTQUFTLENBQ04sVUFBQyxJQUFnQjtZQUNiLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFDRCxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBZixDQUFlLENBQzdCLENBQUM7SUFDVixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBM0JELElBMkJDO0FBM0JZLGNBQWM7SUFMMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7S0FDdkUsQ0FBQztxQ0FLOEIsZUFBTSxFQUFnQixXQUFJLEVBQXVCLDBCQUFXO0dBSi9FLGNBQWMsQ0EyQjFCO0FBM0JZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSVVzZXJMb2dpbiB9IGZyb20gJy4uLy4uL3NoYXJlZC91c2VyL2ktdXNlci1sb2dpbic7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIgLFxyXG4gICAgc3R5bGVVcmxzOiBbJ3BhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3MnLCAncGFnZXMvbG9naW4vbG9naW4uY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgdXNlcjogVXNlcjtcclxuICAgIGlzTG9nZ2luZ0luID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJ+L3Jlc291cmNlcy9pbWFnZXMvc29jaWFsMi5qcGdcIjtcclxuICAgICAgICB0aGlzLnBhZ2UuY3NzID0gJ3BhZ2Uge2JhY2tncm91bmQtc2l6ZTogY292ZXI7IGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDt9JztcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luXCIpO1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9naW4odGhpcy51c2VyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKGRhdGE6IElVc2VyTG9naW4pID0+ICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZGF0YS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IGFsZXJ0KFwiRXJyb3IhXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbn0iXX0=
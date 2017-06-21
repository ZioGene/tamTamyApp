"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var ListComponent = (function () {
    function ListComponent(router, page, userService) {
        this.router = router;
        this.page = page;
        this.userService = userService;
        this.feedList = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        //this.feedList.push({ name: "Apples" });
        this.getFeeds();
    };
    ListComponent.prototype.getFeeds = function () {
        console.log("getFeeds");
        this.userService.getFeeds(this.userService.token)
            .subscribe(function (response) {
            console.log(JSON.stringify(response));
        }, function (error) { return alert("Error!"); });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "pages/list/list.html",
        styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page, user_service_1.UserService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwrREFBNkQ7QUFDN0QsMENBQXlDO0FBQ3pDLGdDQUErQjtBQU8vQixJQUFhLGFBQWE7SUFJeEIsdUJBQW9CLE1BQWMsRUFBVSxJQUFVLEVBQVUsV0FBd0I7UUFBcEUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUZ4RixhQUFRLEdBQWtCLEVBQUUsQ0FBQztJQUU4RCxDQUFDO0lBRTVGLGdDQUFRLEdBQVI7UUFDRSx5Q0FBeUM7UUFFM0MsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ00sT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQzthQUM1QyxTQUFTLENBQ04sVUFBQyxRQUFRO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxFQUNELFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFmLENBQWUsQ0FDN0IsQ0FBQztJQUNWLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7QUF0QlksYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxxQkFBcUIsQ0FBQztLQUNqRSxDQUFDO3FDQUs0QixlQUFNLEVBQWdCLFdBQUksRUFBdUIsMEJBQVc7R0FKN0UsYUFBYSxDQXNCekI7QUF0Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJsaXN0XCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbGlzdC9saXN0Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xpc3QvbGlzdC1jb21tb24uY3NzXCIsIFwicGFnZXMvbGlzdC9saXN0LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgZmVlZExpc3Q6IEFycmF5PE9iamVjdD4gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvL3RoaXMuZmVlZExpc3QucHVzaCh7IG5hbWU6IFwiQXBwbGVzXCIgfSk7XHJcbiAgICBcclxuICB0aGlzLmdldEZlZWRzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRGZWVkcygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImdldEZlZWRzXCIpO1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0RmVlZHModGhpcy51c2VyU2VydmljZS50b2tlbilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4gIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4gYWxlcnQoXCJFcnJvciFcIilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxufSJdfQ==
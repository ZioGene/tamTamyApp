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
    }
    ListComponent.prototype.ngOnInit = function () {
        //this.contentList.push({ name: "Apples" });
        //this.contentList.push({ name: "Apples" });
        this.getContent();
    };
    ListComponent.prototype.getContent = function () {
        var _this = this;
        console.log("getContent");
        this.userService.getContent(this.userService.token)
            .subscribe(function (response) {
            //console.log(JSON.stringify(response));
            _this.contentList.title = "titolo";
            _this.contentList.id = "id";
            _this.contentList.network = "network";
            _this.contentList.contentType = "contentType";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwrREFBNkQ7QUFDN0QsMENBQXlDO0FBQ3pDLGdDQUErQjtBQU8vQixJQUFhLGFBQWE7SUFLeEIsdUJBQW9CLE1BQWMsRUFBVSxJQUFVLEVBQVUsV0FBd0I7UUFBcEUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7SUFFNUYsZ0NBQVEsR0FBUjtRQUNFLDRDQUE0QztRQUM1Qyw0Q0FBNEM7UUFFM0MsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQUEsaUJBY0c7UUFiRyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO2FBQzlDLFNBQVMsQ0FDTixVQUFDLFFBQVE7WUFDTCx3Q0FBd0M7WUFDeEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUUsUUFBUSxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxHQUFFLElBQUksQ0FBQztZQUMxQixLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRSxTQUFTLENBQUM7WUFDcEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEdBQUUsYUFBYSxDQUFDO1FBRWhELENBQUMsRUFDRCxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBZixDQUFlLENBQzdCLENBQUM7SUFDVixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBN0JZLGFBQWE7SUFMekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7S0FDakUsQ0FBQztxQ0FNNEIsZUFBTSxFQUFnQixXQUFJLEVBQXVCLDBCQUFXO0dBTDdFLGFBQWEsQ0E2QnpCO0FBN0JZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibGlzdFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xpc3QvbGlzdC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9saXN0L2xpc3QtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xpc3QvbGlzdC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gIC8vY29udGVudExpc3Q6IEFycmF5PE9iamVjdD4gPSBbXTtcclxuICBjb250ZW50TGlzdDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vdGhpcy5jb250ZW50TGlzdC5wdXNoKHsgbmFtZTogXCJBcHBsZXNcIiB9KTtcclxuICAgIC8vdGhpcy5jb250ZW50TGlzdC5wdXNoKHsgbmFtZTogXCJBcHBsZXNcIiB9KTtcclxuXHJcbiAgICAgdGhpcy5nZXRDb250ZW50KCk7XHJcbiAgfVxyXG5cclxuICBnZXRDb250ZW50KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0Q29udGVudFwiKTtcclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldENvbnRlbnQodGhpcy51c2VyU2VydmljZS50b2tlbilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4gIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50TGlzdC50aXRsZT0gXCJ0aXRvbG9cIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRMaXN0LmlkPSBcImlkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50TGlzdC5uZXR3b3JrPSBcIm5ldHdvcmtcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRMaXN0LmNvbnRlbnRUeXBlPSBcImNvbnRlbnRUeXBlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiBhbGVydChcIkVycm9yIVwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59Il19
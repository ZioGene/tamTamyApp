"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_component_1 = require("./app.component");
var nativescript_angular_1 = require("nativescript-angular");
var user_service_1 = require("./shared/user/user.service");
var feed_list_service_1 = require("./shared/feed/feed-list.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            nativescript_angular_1.NativeScriptFormsModule,
            nativescript_angular_1.NativeScriptHttpModule
        ],
        declarations: [app_component_1.AppComponent],
        providers: [user_service_1.UserService, feed_list_service_1.FeedListService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsZ0ZBQThFO0FBRTlFLGlEQUErQztBQUMvQyw2REFBdUY7QUFDdkYsMkRBQXlEO0FBQ3pELHFFQUFrRTtBQVlsRSxJQUFhLFNBQVM7SUFBdEI7SUFBd0IsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUF6QixJQUF5QjtBQUFaLFNBQVM7SUFWckIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ0wsd0NBQWtCO1lBQ2xCLDhDQUF1QjtZQUN2Qiw2Q0FBc0I7U0FDekI7UUFDRCxZQUFZLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQzVCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsbUNBQWUsQ0FBQztRQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzFCLENBQUM7R0FDVyxTQUFTLENBQUc7QUFBWiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLCBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGZWVkTGlzdFNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9mZWVkL2ZlZWQtbGlzdC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlLCBGZWVkTGlzdFNlcnZpY2VdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl19
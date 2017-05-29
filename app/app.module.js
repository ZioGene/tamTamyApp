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

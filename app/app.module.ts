import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { NativeScriptFormsModule, NativeScriptHttpModule } from 'nativescript-angular';
import { UserService } from './shared/user/user.service';
import { FeedListService } from './shared/feed/feed-list.service';
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from './app.component';
import { routes, navigatableComponents } from './app.routing';
 
@NgModule({
  imports: [
      NativeScriptModule,
      NativeScriptFormsModule,
      NativeScriptHttpModule,
      NativeScriptRouterModule,
      NativeScriptRouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent, 
    ...navigatableComponents
    ],
  providers: [UserService, FeedListService],
  bootstrap: [AppComponent]
})
export class AppModule {}

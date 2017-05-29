import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppComponent } from './app.component';
import { NativeScriptFormsModule, NativeScriptHttpModule } from 'nativescript-angular';
import { UserService } from './shared/user/user.service';
import { FeedListService } from './shared/feed/feed-list.service';

@NgModule({
  imports: [
      NativeScriptModule,
      NativeScriptFormsModule,
      NativeScriptHttpModule
  ],
  declarations: [AppComponent],
  providers: [UserService, FeedListService],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Component } from '@angular/core';
import { User } from "./shared/user/user";
import { UserService } from './shared/user/user.service';
import { IUserLogin } from './shared/user/i-user-login';

@Component({
    selector: 'my-app',
    template: `
        <StackLayout>
            <Image src="res://logo_login" stretch="none" horizontalAlignment="center"></Image>
            <TextField hint='UserID' keyboardType='email' [(ngModel)]="user.userid"
                       autocorrect='false' autocapitalizationType='none'></TextField>
            <TextField hint='Password'  secure='true' [(ngModel)]="user.password"></TextField>

            <Button text='Login' (tap)="login()" class="submit-button"></Button>
        </StackLayout>
    `,
    styleUrls: ['pages/login/login-common.css', 'pages/login/login.css']
})
export class AppComponent {
    user: User;
    isLoggingIn = false;

    constructor(private ueserService: UserService) {
        this.user = new User();
    }

    login() {
        console.log("hello");
        this.ueserService.login(this.user)
            .subscribe(
                (data: IUserLogin) =>  {
                    alert(data.token);
                    this.isLoggingIn = true;
                }
            );
    }
}
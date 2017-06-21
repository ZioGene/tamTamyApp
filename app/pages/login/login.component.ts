import { Component, OnInit } from '@angular/core';
import { User } from "../../shared/user/user";
import { UserService } from '../../shared/user/user.service';
import { IUserLogin } from '../../shared/user/i-user-login';
import { Router } from '@angular/router';
import { Page } from "ui/page";

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
export class LoginComponent implements OnInit{
    user: User;
    isLoggingIn = false;

    constructor(private router: Router, private page: Page, private userService: UserService) {
        this.user = new User();
    }

    ngOnInit(){
        this.page.actionBarHidden = true;
    }

    login() {
        console.log("hello");
        this.userService.login(this.user)
            .subscribe(
                (data: IUserLogin) =>  {
                    alert(data.token);
                    console.log(JSON.stringify(data));
                    this.isLoggingIn = true;
                    this.router.navigate(["/list"]);
                },
                (error) => alert("Error!")
            );
    }
}
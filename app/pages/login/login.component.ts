import { Component, OnInit } from '@angular/core';
import { User } from "../../shared/user/user";
import { UserService } from '../../shared/user/user.service';
import { IUserLogin } from '../../shared/user/i-user-login';
import { Router } from '@angular/router';
import { Page } from "ui/page";

@Component({
    selector: 'my-app',
    templateUrl: "pages/login/login.html" ,
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
        this.page.backgroundImage = "~/resources/images/social2.jpg";
        this.page.css = 'page {background-size: cover; background-position: center; background-repeat: no-repeat;}';
    }

    login() {
        console.log("login");
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
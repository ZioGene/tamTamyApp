import { Component, OnInit } from "@angular/core";
import { UserService } from '../../shared/user/user.service';
import { Router } from '@angular/router';
import { Page } from "ui/page";

@Component({
  selector: "list",
  templateUrl: "pages/list/list.html",
  styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
})
export class ListComponent implements OnInit{

  feedList: Array<Object> = [];

  constructor(private router: Router, private page: Page, private userService: UserService) {}

  ngOnInit() {
    //this.feedList.push({ name: "Apples" });
    
  this.getFeeds();
  }

  getFeeds() {
        console.log("getFeeds");
        this.userService.getFeeds(this.userService.token)
            .subscribe(
                (response) =>  {
                    console.log(JSON.stringify(response));
                },
                (error) => alert("Error!")
            );
    }
}
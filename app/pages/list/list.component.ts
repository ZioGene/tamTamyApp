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

  //contentList: Array<Object> = [];
  contentList: any;

  constructor(private router: Router, private page: Page, private userService: UserService) {}

  ngOnInit() {
    //this.contentList.push({ name: "Apples" });
    //this.contentList.push({ name: "Apples" });

     this.getContent();
  }

  getContent() {
        console.log("getContent");
        this.userService.getContent(this.userService.token)
            .subscribe(
                (response) =>  {
                    //console.log(JSON.stringify(response));
                    this.contentList.title= "titolo";
                    this.contentList.id= "id";
                    this.contentList.network= "network";
                    this.contentList.contentType= "contentType";
                    
                },
                (error) => alert("Error!")
            );
    }
}
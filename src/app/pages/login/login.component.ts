import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CorkboardService } from "src/app/services/corkboard/corkboard.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  model = {
    email: "",
    pin: "",
  };

  user: any;
  constructor(
    private router: Router,
    private corkBoardService: CorkboardService
  ) {}

  ngOnInit() {}

  submit() {
    this.corkBoardService.login(this.model).subscribe((res) => {
      if (!res["user"]) {
        console.log(res["message"]);
      } else {
        this.user = res["user"];
        let token = res["token"];
        localStorage.setItem('user', JSON.stringify(this.user));
        localStorage.setItem('x-access-token', JSON.stringify(token));
        this.router.navigate(["/dashboard"]);
      }
    });
  }
}

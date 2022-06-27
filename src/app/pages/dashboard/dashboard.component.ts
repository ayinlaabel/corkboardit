import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CorkboardService } from "src/app/services/corkboard/corkboard.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  recentCorkboards: any;
  userCorkboard: any;

  constructor(
    private router: Router,
    private corkboardService: CorkboardService
  ) {}

  ngOnInit() {
    this.corkboardService.getRecentCorkBoard().subscribe((res) => {
      this.recentCorkboards = res;
      console.log(this.recentCorkboards);
    });

    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.corkboardService
        .getCorkboardByCurrentUser({ id: user.id })
        .subscribe((corkboards) => {
          this.userCorkboard = corkboards;
          console.log(corkboards);
        });
    }
  }

  addCorkboard() {
    this.router.navigate(["/add-corkboard"]);
  }

  onCorkboard(corkboard: any) {
    if (corkboard.visibility == "private") {
      this.router.navigate([corkboard.id + "/private-corkboard"]);
    } else {
      this.router.navigate(["/corkboard/public/" + corkboard.id]);
    }
  }
}

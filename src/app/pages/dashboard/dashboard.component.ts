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

  constructor(
    private router: Router,
    private corkboardService: CorkboardService
  ) {}

  ngOnInit() {
    this.corkboardService
      .getRecentCorkBoard()
      .subscribe((res) => (this.recentCorkboards = res));
  }

  addCorkboard() {
    this.router.navigate(["/add-corkboard"]);
  }
}

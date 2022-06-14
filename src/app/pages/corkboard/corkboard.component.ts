import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CorkboardService } from "src/app/services/corkboard/corkboard.service";

@Component({
  selector: "app-corkboard",
  templateUrl: "./corkboard.component.html",
  styleUrls: ["./corkboard.component.scss"],
})
export class CorkboardComponent implements OnInit {
  corkboard: any;
  id: any;
  userId: any;
  owner: boolean;
  user: any;
  currentUser: any;
  name: String;

  constructor(
    private corkboardService: CorkboardService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("user"));
    this.userId = this.currentUser.id;
    this.route.params.subscribe((params) => (this.id = params.id));
    this.corkboardService
      .getCorkboardById({ id: this.id })
      .subscribe((corkboard) => {
        console.log(corkboard);
        this.corkboard = corkboard;
      });

    this.corkboardService.getCorkboardOwner({ id: 1 }).subscribe((user) => {
      console.log(user);
      this.name = user["firstName"] + " " + user["lastName"];
    });

    if (this.userId == this.corkboard.userId) {
      this.owner = true;
    }
  }
}

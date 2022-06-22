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
  corkboardUser: any;
  pushpins: any;

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
        this.corkboard = corkboard;
        this.corkboardUser = corkboard["userId"];
        this.corkboardService
          .getCorkboardOwner({ id: this.corkboardUser })
          .subscribe((user) => {
            this.name = user["firstName"] + " " + user["lastName"];
          });
      });

    this.corkboardService.getPushPin({ id: this.id }).subscribe((pushins) => {
      this.pushpins = pushins;
    });

    if (this.userId == this.corkboardUser) {
      this.owner = true;
    }
  }
}

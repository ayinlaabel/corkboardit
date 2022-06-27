import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CorkboardService } from "src/app/services/corkboard/corkboard.service";

@Component({
  selector: "app-private-corkboard",
  templateUrl: "./private-corkboard.component.html",
  styleUrls: ["./private-corkboard.component.scss"],
})
export class PrivateCorkboardComponent implements OnInit {
  id: any;
  password: any;
  corkboard: any;
  name: any;
  pushpin: any;
  corkboardUser: any;

  constructor(
    private route: ActivatedRoute,
    private Router: Router,
    private corkboardService: CorkboardService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params.id;
    });
  }

  submit() {
    this.corkboardService
      .privateCorkboard({ id: this.id, password: this.password })
      .subscribe((corkboard) => {
        this.corkboard = corkboard;
        this.corkboardUser = corkboard["userId"];
        this.corkboardService
          .getCorkboardOwner({ id: this.corkboardUser })
          .subscribe((user) => {
            this.name = user["firstName"] + " " + user["lastName"];
          });
      });
  }
}

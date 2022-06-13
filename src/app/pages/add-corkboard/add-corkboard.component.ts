import { Component, OnInit } from "@angular/core";
import { CorkboardService } from "src/app/services/corkboard/corkboard.service";
import { StaticService } from "src/app/services/static/static.service";

@Component({
  selector: "app-add-corkboard",
  templateUrl: "./add-corkboard.component.html",
  styleUrls: ["./add-corkboard.component.scss"],
})
export class AddCorkboardComponent implements OnInit {
  categories: any;
  password: any;
  model: any = {
    name: "",
    category: "",
    visibility: "",
    password: null,
  };
  constructor(
    private staticService: StaticService,
    private corkboardService: CorkboardService
  ) {}

  ngOnInit() {
    this.staticService.category().subscribe((res) => {
      this.categories = res["categories"];
      console.log(this.categories);
    });
  }

  create() {
    if (this.model.visibility == "public") {
      this.model.password = null;
    }
    // console.log(this.model);

    this.corkboardService.createCorkBoard(this.model)
    .subscribe((corkboard) => {
      console.log(corkboard);
    });
  }
}

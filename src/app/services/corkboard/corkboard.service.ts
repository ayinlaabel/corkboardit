import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { WebRequestService } from "../web-request/web-request.service";

@Injectable({
  providedIn: "root",
})
export class CorkboardService {
  constructor(private webReq: WebRequestService, private router: Router) {}

  login(payload: Object) {
    return this.webReq.post("login", payload);
  }

  getRecentCorkBoard() {
    return this.webReq.get("corkboard");
  }

  createCorkBoard(payload: Object) {
    return this.webReq.post("corkboard", payload);
  }

  logout() {
    localStorage.removeItem("x-access-token");
    this.router.navigate(["/login"]);
  }
}

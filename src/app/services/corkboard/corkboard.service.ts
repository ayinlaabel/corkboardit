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

  getCorkboardByCurrentUser(payload: Object) {
    return this.webReq.post("corkboard/get-corkboard-byUserId", payload);
  }

  createCorkBoard(payload: Object) {
    return this.webReq.post("corkboard", payload);
  }

  privateCorkboard(payload: Object) {
    return this.webReq.post("corkboard/private", payload);
  }

  addPushpin(payload: Object) {
    return this.webReq.post("add-pushpin", payload);
  }

  getCorkboard() {
    return this.webReq.get("corkboard/getAll");
  }

  getCorkboardById(payload: Object) {
    return this.webReq.post("corkboard/byId", payload);
  }

  getCorkboardOwner(payload: object) {
    return this.webReq.post("corkboard/user", payload);
  }

  getPushPin(payload: Object) {
    return this.webReq.post("corkboard/get-pushpin", payload);
  }

  logout() {
    localStorage.removeItem("x-access-token");
    this.router.navigate(["/login"]);
  }
}

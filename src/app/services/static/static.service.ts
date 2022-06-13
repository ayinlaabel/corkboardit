import { Injectable } from "@angular/core";
import { WebRequestService } from "../web-request/web-request.service";

@Injectable({
  providedIn: "root",
})
export class StaticService {
  constructor(private webReq: WebRequestService) {}

  category(){
    return this.webReq.get('static/category')
  }
}

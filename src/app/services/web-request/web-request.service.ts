import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class WebRequestService {
  readonly ROOT_URL = environment.api;

  constructor(private http: HttpClient) {}

  get(uri: string) {
    const url = `${this.ROOT_URL}/${uri}`;
    const token = localStorage.getItem("x-access-token");
    let headers = new HttpHeaders().set("x-access-token", `${token}`);

    return this.http.get(url, { headers });
  }

  post(uri: string, payload: Object) {
    const url = `${this.ROOT_URL}/${uri}`;
    const token = JSON.parse(localStorage.getItem("x-access-token"));
    console.log(token);
    let headers = new HttpHeaders()
      .set("x-access-token", `${token}`)
      .set("Content-Type", "application/json");
    return this.http.post(url, payload, { headers });
  }

  patch(uri: string, payload: Object) {
    const url = `${this.ROOT_URL}/${uri}`;
    const token = localStorage.getItem("token");
    let headers = new HttpHeaders().set("x-access-token", `${token}`);
    return this.http.patch(url, payload, { headers });
  }

  delete(uri: string) {
    const url = `${this.ROOT_URL}/${uri}`;
    const token = localStorage.getItem("x-access-token");
    let headers = new HttpHeaders().set("x-access-token", `${token}`);
    return this.http.delete(url, { headers });
  }

  getAccessToken() {
    return localStorage.getItem("x-access-token");
  }

  setAccessToken(token: any) {
    localStorage.setItem("x-access-token", token);
  }
}

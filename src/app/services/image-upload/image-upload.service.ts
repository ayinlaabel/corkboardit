import { Injectable } from "@angular/core";
import { WebRequestService } from "../web-request/web-request.service";

@Injectable({
  providedIn: "root",
})
export class ImageUploadService {
  constructor(private webRep: WebRequestService) {}

  imageUpload(file: any) {
    const formData = new FormData();

    formData.append("file", file, file.name);
    console.log(file, formData)
    return this.webRep.post("image-upload", { file });
  }
}

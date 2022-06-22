import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FileItem, FileUploader, ParsedResponseHeaders } from "ad-file-upload";
import { CloudinaryOptions, CloudinaryUploader } from "ng2-cloudinary";
import { CorkboardService } from "src/app/services/corkboard/corkboard.service";
import { ImageUploadService } from "src/app/services/image-upload/image-upload.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-add-pushpin",
  templateUrl: "./add-pushpin.component.html",
  styleUrls: ["./add-pushpin.component.scss"],
})
export class AddPushpinComponent implements OnInit {
  corkboardId: any;
  corkboard: any;
  tag: any;
  option: String = "url";
  image: FileUploader;

  model = {
    corkboardId: "",
    url: "",
    description: "",
    tags: "",
  };

  uploader: FileUploader;

  constructor(
    private route: ActivatedRoute,
    private corkboardService: CorkboardService,
    private imageUploadService: ImageUploadService
  ) {
    // this.uploader = new FileUploader({
    //   url: `${environment.api}/image-upload`,
    //   itemAlias: 'pushpin',
    //   autoUpload: true,
    //   method: 'POST',
    //   allowedMimeType: ['image/png', 'image/jpg', 'image/jpeg']
    // });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.corkboardId = params.id;
    });
    this.corkboardService
      .getCorkboardById({ id: this.corkboardId })
      .subscribe((corkboard) => {
        this.corkboard = corkboard["name"];
      });

    // this.uploader.onCompleteItem = (item: FileItem,
    //   response: string, status: number,
    //   _headers: ParsedResponseHeaders) => {
    //   if (status !== 200) {
    //     if (!response) {
    //       console.log('An error occured please try again later');
    //     }
    //   } else {
    //     const { data } = JSON.parse(response);
    //   }
    // };
  }

  submit() {
    // let tags = this.tag.split(",");
    // for (let i = 0; i < tags.length; i++) {
    //   this.model.tags.push(tags[i]);
    // }

    this.model.tags = this.tag
    this.model.corkboardId = this.corkboardId;

    this.corkboardService
      .addPushpin(this.model)
      .subscribe((pushpin) => console.log(pushpin));
  }

  uploadImage(event) {
    let files = event.target.files[0];
    let formData: any = new FormData();
    // formData.append("image", file, file.name);
    // for (let i = 0; i < element.length; i++) {
    //   formData.append("image", element[i]);
    //   console.log(element[i]);
    // }

    formData.entries(files);
    // formData.append('image', file, file.name)

    console.log(formData);
    this.imageUploadService
      .imageUpload(files)
      .subscribe((image) => console.log(image));
  }
}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./pages/login/login.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { HeaderComponent } from "./shared/header/header.component";
import { CorkboardComponent } from "./pages/corkboard/corkboard.component";
import { AddCorkboardComponent } from "./pages/add-corkboard/add-corkboard.component";
import { WebReqInterceptor } from "./interceptor/web-req.interceptor";
import { PushpinComponent } from "./pages/pushpin/pushpin.component";
import { AddPushpinComponent } from "./pages/add-pushpin/add-pushpin.component";
import { Ng2CloudinaryModule } from "ng2-cloudinary";
import { AdFileUploadModule } from "ad-file-upload";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    CorkboardComponent,
    AddCorkboardComponent,
    PushpinComponent,
    AddPushpinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdFileUploadModule,
    HttpClientModule,
    FormsModule,
    Ng2CloudinaryModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WebReqInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

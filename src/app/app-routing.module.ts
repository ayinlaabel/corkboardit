import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AddCorkboardComponent } from "./pages/add-corkboard/add-corkboard.component";
import { AddPushpinComponent } from "./pages/add-pushpin/add-pushpin.component";
import { CorkboardComponent } from "./pages/corkboard/corkboard.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./pages/login/login.component";
import { PrivateCorkboardComponent } from "./pages/private-corkboard/private-corkboard.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "corkboard",
    component: CorkboardComponent,
  },
  {
    path: "corkboard/public/:id",
    component: CorkboardComponent,
  },
  {
    path: "corkboard/private/:id",
    component: CorkboardComponent,
  },
  {
    path: "corkboard/:id/add-pushpin",
    component: AddPushpinComponent,
  },
  {
    path: "add-corkboard",
    component: AddCorkboardComponent,
  },
  {
    path: ":id/private-corkboard",
    component: PrivateCorkboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

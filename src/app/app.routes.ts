import { Routes } from "@angular/router";
import { PageOneComponent } from "./pages/page-1/page-1.component";
import { PageTwoComponent } from "./pages/page-2/page-2.component";
import { PageThreeComponent } from "./pages/page-3/page-3.component";

export const globalRoutes: Routes = [
  {
    path: 'page-1',
    component: PageOneComponent
  },

  {
    path: 'page-2',
    component: PageTwoComponent
  },

  {
    path: 'page-3',
    component: PageThreeComponent
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'page-1'
  },

  {
    path: '**',
    redirectTo: 'page-1'
  }
]

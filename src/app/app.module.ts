import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routes
import { globalRoutes } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { PageOneComponent } from './pages/page-1/page-1.component';
import { PageTwoComponent } from './pages/page-2/page-2.component';
import { PageThreeComponent } from './pages/page-3/page-3.component';

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(globalRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

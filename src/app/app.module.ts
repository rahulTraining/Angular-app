import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import {HttpClientModule} from '@angular/common/http';
import { PracticeComponent } from './practice-folder/practice/practice.component';
import { HomeComponent } from './practice-folder/Browser-router/home/home.component';
import { AboutComponent } from './practice-folder/Browser-router/about/about.component';
import { ContactComponent } from './practice-folder/Browser-router/contact/contact.component';
import { ErrorComponent } from './practice-folder/Browser-router/error/error.component';
import { RoutingHtmlComponent } from './practice-folder/Browser-router/routing-html/routing-html.component';
import { NgForComponent } from './practice-folder/ng-for/ng-for.component';
import { NgSwitchComponent } from './practice-folder/ng-switch/ng-switch.component';
import { NgIfComponent } from './practice-folder/ng-if/ng-if.component';
import { TrackbyComponent } from './practice-folder/trackby/trackby.component';
import { RaRoutingHtmlComponent } from './practice-folder/Router-animation/ra-routing-html/ra-routing-html.component';
import { TodoListComponent } from './practice-folder/todo-list/todo-list.component';
import { DirectivesComponent } from './practice-folder/directives/directives.component'; 
import { CustomDirectivesDirective } from './directives/custom-directives.directive';
import { TemplateDrivenFormsComponent } from './forms-practice-folder/template-driven-form-folder/template-driven-forms/template-driven-forms.component';
import { TdfmValidationsComponent } from './forms-practice-folder/template-driven-form-folder/tdfm-validations/tdfm-validations.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    PracticeComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    RoutingHtmlComponent,
    NgForComponent,
    NgSwitchComponent,
    NgIfComponent,
    TrackbyComponent,
    RaRoutingHtmlComponent,
    TodoListComponent,
    DirectivesComponent,
    CustomDirectivesDirective,
    TemplateDrivenFormsComponent,
    TdfmValidationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

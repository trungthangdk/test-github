import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes,RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenshirtComponent } from './menshirt/menshirt.component';
import {HttpModule} from '@angular/http';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component'
import {Account} from './model/Account.Model'
import {ProductType} from './model/ProductType.Model'
import {Product} from './model/Product.Model'
import { ProductImage } from './model/ProductImage.Model';
import { DatasharingService } from 'src/app/datasharing.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FemalePantsComponent } from './female-pants/female-pants.component';
import { WomanShirtComponent } from './woman-shirt/woman-shirt.component';
import { ManagementProductComponent } from './management-product/management-product.component';
import { MalePantsComponent } from './male-pants/male-pants.component';
const routerconfig : Routes =[
  {path:'home',component:HomeComponent},
  {path:'cart',component:CartComponent},
  {path:'menshirt',component:MenshirtComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:HomeComponent},
  {path:'productDetail',component:ProductDetailComponent},
  {path:'management-product', component:ManagementProductComponent},
  {path: 'male-pants', component: MalePantsComponent},
  {path: 'female-pants', component: FemalePantsComponent},
  {path: 'men-shirt', component: MenshirtComponent},
  {path: 'woman-shirt', component: WomanShirtComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenshirtComponent,
    CartComponent,
    LoginComponent,
    ProductDetailComponent,
    FemalePantsComponent,
    WomanShirtComponent,
    ManagementProductComponent,
    MalePantsComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routerconfig)
  ],
  providers: [Account,Product,DatasharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

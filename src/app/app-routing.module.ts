import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { FruitsComponent } from './fruits/fruits.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { RegistrationComponent } from './registration/registration.component';
import { TestComponent } from './test/test.component';
import { VegetablesComponent } from './vegetables/vegetables.component';

const routes: Routes = [
  { path:'home' , component:HomeComponent},
  { path:'contactus', component:ContactusComponent },
  { path:'login', component: LoginComponent},
  { path: 'test', component:TestComponent},
  { path:'products', component: ProductsComponent ,
     children:[
      {path:'vegetables' , component: VegetablesComponent},
      {path:'fruits' , component: FruitsComponent},
      {path:'groceries' , component:GroceriesComponent},
      {path:'', redirectTo:'/products/vegetables', pathMatch:'full'}

      ]},
  {path:'register' , component:RegistrationComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }

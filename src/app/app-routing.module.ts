import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { ProduitsComponent } from './produits/produits.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ProduitGuard } from './produit.guard';
const routes: Routes = [
  {path:"produits",component:ProduitsComponent},
  {path:"add-produit",component:AddProduitComponent ,canActivate:[ProduitGuard]},
  {path: "updateProduit/:id", component: UpdateProduitComponent},
  {path:"",redirectTo:"produits",pathMatch:"full"},
  {path: 'login', component: LoginComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

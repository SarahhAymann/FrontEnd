import { PricePredictionComponent } from './Pages/price-prediction/price-prediction.component';
import { SellDetailsComponent } from './Pages/sell-details/sell-details.component';
import { PropertyDetailComponent } from './Pages/property/property-card/property-detail/property-detail/property-detail.component';
import { PropertyCardComponent } from './Pages/property/property-card/property-card/property-card.component';
import { ManagePropertiesComponent } from './Pages/manage-properties/manage-properties.component';
import { ManageEmployeeComponent } from './Pages/manage-employee/manage-employee.component';
import { ManageConstraintsComponent } from './Pages/manage-constraints/manage-constraints.component';
import { LoginComponent } from './Pages/login/login.component';
import { AnalyzeComponent } from './Pages/analyze/analyze.component';
import { HomeComponent } from './Pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'analyze',component:AnalyzeComponent},
  {path:'login',component:LoginComponent},
  {path:'manage-constraints',component:ManageConstraintsComponent},
  {path:'manage-employee',component:ManageEmployeeComponent},
  {path:'manage-properties',component:ManagePropertiesComponent},
  {path: 'price-prediction' , component: PricePredictionComponent},
  {path:'property-card/',component:PropertyCardComponent},
  {path:'property-detail/:id',component: PropertyDetailComponent},
  {path:'sell-details',component: SellDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstraintsTableComponent } from './constraints-table/constraints-table.component';
import { LoginComponent } from './pages/login/login.component';
import { ManageConstraintsComponent } from './pages/manage-constraints/manage-constraints.component';
import { ManageEmployeeComponent } from './pages/manage-employee/manage-employee.component';
import { ManagePropertiesComponent } from './pages/manage-properties/manage-properties.component';

const routes: Routes = [
  {path:'employees',component:ManageEmployeeComponent},
  {path:'properties',component:ManagePropertiesComponent},
  {path:'constraints',component:ManageConstraintsComponent},
  {path:'login',component:LoginComponent},
  {path:'constTable',component:ConstraintsTableComponent},
  {path:'admin-dashboard',loadChildren:()=>import("./admin-dashboard/admin-dashboard.module").then(m=>m.AdminDashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

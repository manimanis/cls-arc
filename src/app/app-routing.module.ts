import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FilialesListComponent } from "./filiales-list/filiales-list.component";
import { EditFilialeComponent } from './edit-filiale/edit-filiale.component';
import { ListeTypeContactComponent } from './liste-type-contact/liste-type-contact.component';
import { ListeResponsablesComponent } from './liste-responsables/liste-responsables.component';

const routes: Routes = [
  { path: "filiales", component: FilialesListComponent },
  { path: 'edit-filiale', component: EditFilialeComponent },
  { path: 'liste-type-contact', component: ListeTypeContactComponent },
  { path: 'liste-responsables', component: ListeResponsablesComponent },
  { path: "", redirectTo: "filiales", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

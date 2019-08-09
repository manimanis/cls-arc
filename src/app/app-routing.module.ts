import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditFilialeComponent } from './edit-filiale/edit-filiale.component';
import { ListeTypeContactComponent } from './liste-type-contact/liste-type-contact.component';
import { ListeResponsablesComponent } from './liste-responsables/liste-responsables.component';
import { SelectResponsablesComponent } from './select-responsables/select-responsables.component';
import { ListeFilialesComponent } from './liste-filiales/liste-filiales.component';
import { FormEditFilialeComponent } from './form-edit-filiale/form-edit-filiale.component';

const routes: Routes = [
  { path: "liste-filiales", component: ListeFilialesComponent },
  { path: 'form-edit-filiale', component: FormEditFilialeComponent },
  { path: 'liste-type-contact', component: ListeTypeContactComponent },
  { path: 'liste-responsables', component: ListeResponsablesComponent },
  { path: 'select-responsables', component: SelectResponsablesComponent },
  { path: "", redirectTo: "liste-filiales", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

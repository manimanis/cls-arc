import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FabComponent } from './fab/fab.component';
import { EditFilialeComponent } from './edit-filiale/edit-filiale.component';
import { NlToBrPipe } from './pipes/nl-to-br.pipe';
import { ListeTypeContactComponent } from './liste-type-contact/liste-type-contact.component';
import { ListeResponsablesComponent } from './liste-responsables/liste-responsables.component';
import { ListeSelectionResponsablesComponent } from './liste-selection-responsables/liste-selection-responsables.component';
import { AideRechercheComponent } from './aide-recherche/aide-recherche.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { TableResponsablesComponent } from './table-responsables/table-responsables.component';
import { FormEditResponsableComponent } from './form-edit-responsable/form-edit-responsable.component';
import { TableTypesContactsComponent } from './table-types-contacts/table-types-contacts.component';
import { FormEditTypeContactComponent } from './form-edit-type-contact/form-edit-type-contact.component';
import { FocusInputDirective } from './directives/focus-input.directive';
import { SelectResponsablesComponent } from './select-responsables/select-responsables.component';
import { CardResponsableComponent } from './card-responsable/card-responsable.component';
import { CardFilialeComponent } from './card-filiale/card-filiale.component';
import { ListeFilialesComponent } from './liste-filiales/liste-filiales.component';
import { FormEditFilialeComponent } from './form-edit-filiale/form-edit-filiale.component';
import { ModalSelectResponsablesComponent } from './modal-select-responsables/modal-select-responsables.component';


@NgModule({
  declarations: [
    AppComponent,
    FabComponent,
    EditFilialeComponent,
    NlToBrPipe,
    ListeTypeContactComponent,
    FormEditTypeContactComponent,
    ListeResponsablesComponent,
    ListeSelectionResponsablesComponent,
    AideRechercheComponent,
    SearchFieldComponent,
    TableResponsablesComponent,
    FormEditResponsableComponent,
    TableTypesContactsComponent,
    FocusInputDirective,
    SelectResponsablesComponent,
    CardResponsableComponent,
    CardFilialeComponent,
    ListeFilialesComponent,
    FormEditFilialeComponent,
    ModalSelectResponsablesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: 'API_BASE_URL', useValue: 'http://127.0.0.1/clsrestful/public' },
    { provide: 'API_TYPES_CONTACTS', useValue: 'types-contacts' },
    { provide: 'API_RESPONSABLES', useValue: 'responsables' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

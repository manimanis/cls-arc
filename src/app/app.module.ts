import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilialesListComponent } from './filiales-list/filiales-list.component';
import { FilialeItemComponent } from './filiale-item/filiale-item.component';
import { FabComponent } from './fab/fab.component';
import { EditFilialeComponent } from './edit-filiale/edit-filiale.component';
import { ContactComponent } from './contact/contact.component';
import { FilialeContactComponent } from './filiale-contact/filiale-contact.component';
import { NlToBrPipe } from './pipes/nl-to-br.pipe';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ListeTypeContactComponent } from './liste-type-contact/liste-type-contact.component';
import { EditTypeContactComponent } from './edit-type-contact/edit-type-contact.component';
import { ListeResponsablesComponent } from './liste-responsables/liste-responsables.component';
import { ListeSelectionResponsablesComponent } from './liste-selection-responsables/liste-selection-responsables.component';
import { AideRechercheComponent } from './aide-recherche/aide-recherche.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { ListeResponsablesV2Component } from './liste-responsables-v2/liste-responsables-v2.component';
import { FormEditResponsableComponent } from './form-edit-responsable/form-edit-responsable.component';


@NgModule({
  declarations: [
    AppComponent,
    FilialesListComponent,
    FilialeItemComponent,
    FabComponent,
    EditFilialeComponent,
    ContactComponent,
    FilialeContactComponent,
    NlToBrPipe,
    ContactEditComponent,
    ListeTypeContactComponent,
    EditTypeContactComponent,
    ListeResponsablesComponent,
    ListeSelectionResponsablesComponent,
    AideRechercheComponent,
    SearchFieldComponent,
    ListeResponsablesV2Component,
    FormEditResponsableComponent
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

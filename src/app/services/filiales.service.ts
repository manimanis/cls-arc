import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Filiale } from '../shared/filiale';
import { Salle } from '../shared/salle';
import { Armoire } from '../shared/armoire';
import { Etagere } from '../shared/etagere';
import { Contact } from '../shared/contact';
import { ContactItem } from '../shared/contact-item';

@Injectable({
  providedIn: 'root'
})
export class FilialesService {

  filiales: Filiale[] = [
    new Filiale({
      numFiliale: 0,
      nomFiliale: 'TPM',
      description: 'TPM a été créée en 2008, elle est spécialisée en traitement de surface.',
      adresse: 'Sousse',
      observations: '',
      dateCreation: '2019-07-18',
      contacts: [
        new Contact({
          numContact: 1,
          nomPrenom: 'Mohamed Anis MANI',
          contactInfos: {
            Téléphone: [
              new ContactItem({
                numContactItem: 1,
                typeContact: 'Téléphone',
                valueContact: '42 376 770',
                remarque: 'Principal'
              }),
              new ContactItem({
                numContactItem: 2,
                typeContact: 'Téléphone',
                valueContact: '40 123 456',
                remarque: 'Secondaire'
              })
            ],
            Email: [
              new ContactItem({
                numContactItem: 3,
                typeContact: 'Email',
                valueContact: 'manimohamed@gmail.com',
                remarque: 'Principal'
              }),
              new ContactItem({
                numContactItem: 5,
                typeContact: 'Email',
                valueContact: 'manianis@yahoo.fr',
                remarque: 'Secondaire'
              }),
              new ContactItem({
                numContactItem: 6,
                typeContact: 'Email',
                valueContact: 'manianis_1975@gmail.com',
                remarque: 'Autre'
              }),
              new ContactItem({
                numContactItem: 7,
                typeContact: 'Email',
                valueContact: 'manianis@hotmail.fr',
                remarque: 'Hotmail'
              })
            ],
            'Adresse Postale': [
              new ContactItem({
                numContactItem: 4,
                typeContact: 'Adresse Postale',
                valueContact: '8, Rue Riadh\n4011 Hammam Sousse\nSousse',
                remarque: 'Domicile'
              })
            ]
          }
        }),
        new Contact({
          numContact: 2,
          nomPrenom: 'Abderrazek MANI',
          contactInfos: {
            Téléphone: [
              new ContactItem({
                numContactItem: 8,
                typeContact: 'Téléphone',
                valueContact: '42 376 770',
                remarque: 'Principal'
              }),
              new ContactItem({
                numContactItem: 9,
                typeContact: 'Téléphone',
                valueContact: '40 123 456',
                remarque: 'Secondaire'
              })
            ],
            Email: [
              new ContactItem({
                numContactItem: 10,
                typeContact: 'Email',
                valueContact: 'manimohamed@gmail.com',
                remarque: 'Principal'
              }),
              new ContactItem({
                numContactItem: 11,
                typeContact: 'Email',
                valueContact: 'manianis@yahoo.fr',
                remarque: 'Secondaire'
              }),
              new ContactItem({
                numContactItem: 12,
                typeContact: 'Email',
                valueContact: 'manianis_1975@gmail.com',
                remarque: 'Autre'
              }),
              new ContactItem({
                numContactItem: 13,
                typeContact: 'Email',
                valueContact: 'manianis@hotmail.fr',
                remarque: 'Hotmail'
              })
            ],
            'Adresse Postale': [
              new ContactItem({
                numContactItem: 14,
                typeContact: 'Adresse Postale',
                valueContact: '8, Rue Riadh\n4011 Hammam Sousse\nSousse',
                remarque: 'Domicile'
              })
            ],
            'Site Web': [
              new ContactItem({
                numContactItem: 15,
                typeContact: 'Site Web',
                valueContact: 'http://',
                remarque: 'Site Web'
              })
            ]
          }
        })
      ],
      salles: [
        new Salle({
          numSalle: 1,
          nomSalle: 'Salle A',
          description: 'Salle principale',
          observations: '',
          dateCreation: '2019-07-20',
          armoires: [
            new Armoire({
              numArmoire: 1,
              libelle: 'A-1',
              description: '',
              observations: '',
              etageres: [
                new Etagere({
                  numEtagere: 1,
                  libelle: '1',
                  description: '',
                  observations: ''
                })
              ]
            }),
            new Armoire({
              numArmoire: 2,
              libelle: 'A-2',
              description: '',
              observations: ''
            }),
            new Armoire({
              numArmoire: 3,
              libelle: 'A-3',
              description: '',
              observations: ''
            }),
            new Armoire({
              numArmoire: 4,
              libelle: 'A-4',
              description: '',
              observations: ''
            })
          ]
        }),
        new Salle({
          numSalle: 2,
          nomSalle: 'Salle B',
          description: 'Salle secondaire',
          observations: '',
          dateCreation: '2019-07-20',
          armoires: [
            new Armoire({
              numArmoire: 5,
              libelle: 'B-1',
              description: '',
              observations: ''
            }),
            new Armoire({
              numArmoire: 6,
              libelle: 'B-2',
              description: '',
              observations: ''
            }),
            new Armoire({
              numArmoire: 7,
              libelle: 'B-3',
              description: '',
              observations: ''
            }),
            new Armoire({
              numArmoire: 8,
              libelle: 'B-4',
              description: '',
              observations: ''
            })
          ]
        })
      ]
    })
  ];

  constructor() { }

  getFiliales(): Observable<Filiale[]> {
    return of(this.filiales);
  }
}

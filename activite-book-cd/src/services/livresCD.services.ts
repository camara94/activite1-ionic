import {Book} from "../models/Book";
import {CD} from "../models/CD";

export class LivresCDServices{

  booksList:Book[] = [
    {
      titre:'Système d\'exploitation',
      autor:'Andrew Tanenbaum',
      site:'http://ars-paris.state.gov',
      date:'2008',
      pret:true,
    },
    {
      titre:'PHP5',
      autor:'Olivier HEURTEL',
      site:'www.editions-eni.com',
      date:'02/09/2004',
      pret:false
    },
    {
      titre:'AJAX',
      autor:'Luc VAN LANCKER',
      site:'www.editions-eni.com',
      date:'16/05/2007',
      pret:true
    },
    {
      titre:'Introduction aux réseaux',
      autor:'Lotfi TLILI',
      site:'lotfi.tlili@isetsf.rnu.tn',
      date:'01/01/2010',
      pret:true
    },
    {
      titre:'Langage C',
      autor:'Thabet SLIMANI',
      site:'edition.cle@gnet.tn',
      date:'01/01/2011',
      pret:true
    },
    {
        titre:'Algorithmitique',
      autor:'Thabet SLIMANI',
      site:'edition.cle@gnet.tn',
      date:'01/01/2011',
      pret:true
    }
  ];
  cdLists:CD[] = [
    {
      titre:'Windows 7',
      auteur:'Microsft corporation',
      date:'05/06/2008',
      pret:false
    },
    {
      titre:'Windows 10',
      auteur:'Microsft corporation',
      date:'10/11/2015',
      pret:false
    },
    {
      titre:'Where',
      auteur:'Tekno',
      date:'05/06/2013',
      pret:true
    }
  ];

  onRendrePreter(i:number){
    if(this.booksList[i]){
      this.booksList[i].pret = ! this.booksList[i].pret;
    }
    if(this.cdLists[i])
    this.cdLists[i].pret = !this.cdLists[i].pret;
  }
}

import { Component, OnInit } from '@angular/core';
import { Boeken } from '../boeken';
import { BoekenService } from '../boeken.service';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-boeken-list',
  templateUrl: './boeken-list.component.html',
  styleUrls: ['./boeken-list.component.css']
})
export class BoekenListComponent implements OnInit {

  boekens: Boeken[];
  boekenen: Boeken[];
  boekenDetails: Boeken[];



  constructor(private boekenService: BoekenService) {
  }



  ngOnInit() {
  }





  reloadAll() {
    this.boekenService.findAll().subscribe(
      boekens => {
        this.boekens = boekens
        this.laatZien = true;
        this.laatZien3 = true;
      });
  }



  laatZien = false;
  laatZien2 = false;
  laatZien3 = false;
  laatZien4 = false;





  delete(id) {
    this.boekenService.delete(id).subscribe(
      () => this.reloadAll()
    );
  }

  delete1() {
    this.laatZien = false;
    this.laatZien3 = false;
    return this.boekens = null;
  }

  delete2() {
    this.laatZien2 = false;
    this.laatZien4 = false;
    return this.boekenen = null;
  }


  reloadBoekenAuteur(auteur: String) {
    this.boekenService.findByAuteur(auteur).subscribe(
      boekenen => {
        this.boekenen = boekenen
        this.laatZien2 = true
        this.laatZien4 = true
      }
    );
  }

  reloadBoekenTitel(titel: String) {
    this.boekenService.findByTitel(titel).subscribe(
      boekenen => {
        this.boekenen = boekenen
        this.laatZien2 = true
        this.laatZien4 = true
      }
    );
  }





  sortData(sort: Sort) {
    const data = this.boekens;
    if (!sort.active || sort.direction === '') {
      this.boekens = data;
      return;
    }


    this.boekens = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'titel': return compare(a.titel, b.titel, isAsc);
        case 'auteur': return compare(a.auteur, b.auteur, isAsc);
        case 'beoordeling': return compare(a.beoordeling, b.beoordeling, isAsc);
        case 'genre': return compare(a.genre, b.genre, isAsc);
        default: return 0;
      }
    });
  }



  sortData2(sort: Sort) {
    const data = this.boekenen;
    if (!sort.active || sort.direction === '') {
      this.boekenen = data;
      return;
    }


    this.boekenen = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'titel': return compare(a.titel, b.titel, isAsc);
        case 'auteur': return compare(a.auteur, b.auteur, isAsc);
        case 'beoordeling': return compare(a.beoordeling, b.beoordeling, isAsc);
        case 'genre': return compare(a.genre, b.genre, isAsc);
        default: return 0;
      }
    });
  }}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}



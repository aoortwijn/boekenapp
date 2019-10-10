import { Component, OnInit, Input } from '@angular/core';
import { BoekenListComponent } from '../boeken-list/boeken-list.component';
import { Boeken } from '../boeken';
import { BoekenService } from '../boeken.service';
import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';




@Component({
  selector: 'app-boeken-form',
  templateUrl: './boeken-form.component.html',
  styleUrls: ['./boeken-form.component.css']
})
export class BoekenFormComponent implements OnInit {

  @Input()
  boekenList: BoekenListComponent;

  boeken = new Boeken();

  jaartallen = [];




  constructor(private boekenService: BoekenService) { }

  ngOnInit() {

    for (var x = 1950; x < 2100; x++)
      this.jaartallen.push(x);

  }


  public save() {
    this.boekenService.save(this.boeken).subscribe(
      boek => {
        this.boekenList.boekens = [], this.boekenList.boekens.push(boek)
        // this.laatZien = true
        this.boeken.auteur = ""
        this.boeken = new Boeken();
      }
    );
  }

  laatZien = false;

  zoeken
  zoeken1
  zoeken2



  delete() {
    this.boekenList.boekens = null;
    this.laatZien = false;
  }

  public showList() {
    this.boekenList.reloadAll()
  }

  public findByAuteur(auteur: string) {
    this.boekenService.findByAuteur(auteur).subscribe(
      () => {
        this.boekenList.reloadBoekenAuteur(auteur)
        this.zoeken1 = ""
      });
  }



  public findByTitel(titel: String) {
    this.boekenService.findByTitel(titel).subscribe(
      () => {
        this.boekenList.reloadBoekenTitel(titel)
        this.zoeken = ""
      });
  }



}


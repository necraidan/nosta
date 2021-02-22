import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['nom', 'date', 'ged'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  searchForm = new FormGroup({
    query: new FormControl(''),
  });

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.searchForm.valueChanges.subscribe((values) => {
      this.dataSource.filter = values.query;
    });
  }
}

export interface CompanyElement {
  nom: string;
  date: string;
  ged?: boolean;
}

const ELEMENT_DATA: CompanyElement[] = [
  // tslint:disable-next-line:quotemark
  { nom: "MacDonald's", date: '02/01/2005', ged: true },
  { nom: 'KFC', date: '10/10/2018', ged: false },
  { nom: 'Subway', date: '01/07/1997' },
  { nom: 'Burger King', date: '22/12/2019' },
];

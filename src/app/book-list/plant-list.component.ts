import { Component, OnInit } from '@angular/core';

import { Results } from '../plant';
import { BooksService } from '../books.service';
import { PlantsService } from '../plants.service';
@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
  books!: Results;

  constructor(private bookService: BooksService, private plantService: PlantsService) { }
  
  ngOnInit() {
    this.bookService.getBooks().subscribe(data => {
      console.log(data);
      this.books = data;
    })
    this.plantService.getPlants().subscribe(data => {
      console.log(data);
    })
  }
}

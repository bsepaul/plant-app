import { Component } from '@angular/core';

import { Results } from '../plant';
import { PlantsService } from '../plants.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent {
  plants!: Results;

  constructor(private plantService: PlantsService) { }

  getPlants(sunlight: string) {
    this.plantService.getPlants(sunlight).subscribe(data => {
      console.log(data);
      this.plants = data;
    })
  }
}

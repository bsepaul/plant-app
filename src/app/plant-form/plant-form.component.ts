import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PlantListComponent } from '../plant-list/plant-list.component';

@Component({
  selector: 'app-plant-form',
  templateUrl: './plant-form.component.html',
  styleUrls: ['./plant-form.component.css']
})
export class PlantFormComponent {

  cycles = [
    { name: "perennial", value: "perennial" },
    { name: "annual", value: "annual" },
    { name: "biennial", value: "biennial" },
    { name: "biannual", value: "biannual" },
  ];

  sunlight_amounts = [
    { name: "full shade", value: "full_shade" },
    { name: "partial shade", value: "part_shade" },
    { name: "sunnier than partial shade", value: "sun-part_shade" },
    { name: "full sun", value: "full_sun" },
  ];

  watering_amounts = [
    { name: "frequent", value: "frequent" },
    { name: "average", value: "average" },
    { name: "minimum", value: "minimum" },
    { name: "none", value: "none" },
  ];

  constructor(private plantList: PlantListComponent) { }

  plantForm = new FormGroup({
    cycle: new FormControl(''),
    sunlight: new FormControl(''),
    watering: new FormControl(''),
  });

  submitPlantForm() {
    console.log(this.plantForm.value);
    this.plantList.getPlants(
      this.plantForm.value.cycle ?? '',
      this.plantForm.value.sunlight ?? '',
      this.plantForm.value.watering ?? ''
    );
  }

}

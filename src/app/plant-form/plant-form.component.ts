import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { PlantListComponent } from '../plant-list/plant-list.component';

@Component({
  selector: 'app-plant-form',
  templateUrl: './plant-form.component.html',
  styleUrls: ['./plant-form.component.css']
})
export class PlantFormComponent {

  sunlight_amounts = [
    { name: "full shade", value: "full_shade" },
    { name: "partial shade", value: "part_shade" },
    { name: "sunnier than partial shade", value: "sun-part_shade" },
    { name: "full sun", value: "full_sun" },
  ];

  constructor(private plantList: PlantListComponent) { }

  plantForm = new FormGroup({
    sunlight: new FormControl('')
  })

  submitPlantForm() {
    this.plantList.getPlants(
      this.plantForm.value.sunlight ?? ''
    )
  }

}

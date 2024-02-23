import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public getPlants(cycle: string, sunlight: string, watering: string): Observable<any> {

    if (sunlight) {
      this.apiUrl += "&sunlight=" + sunlight
    }

    if (cycle) {
      this.apiUrl += "&cycle=" + cycle
    }

    if (watering) {
      this.apiUrl += "&watering=" + watering
    }

    console.log("Fetching data from " + this.apiUrl)

    return this.httpClient.get(this.apiUrl);
  }

  public getPlantsTrefle(): Observable<any> {
    return this.httpClient.get(environment.browserApiUrl);
  }
}

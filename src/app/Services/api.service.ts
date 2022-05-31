import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Property } from '../Pages/property';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postSellData(data : any){
    return this.http.post<any>("http://localhost:3000/sellDetails/", data);
  }

  getSellData(){
    return this.http.get<any>("http://localhost:3000/sellDetails");
  }

  getProperty(id: number){
    return this.getAllProperties().pipe(
      map(propertiesArray=> {
        return propertiesArray.find(p=>p.id === id);
      })
    );
  }
  getAllProperties(): Observable<Property[]>{
    return this.http.get("http://localhost:3000/propertyDetails").pipe(
      map(data => {
        const propertiesArray: Array<Property> = [];
        for (const id in data) {
          if(data.hasOwnProperty(id)){
          propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }

  /*postPredictionDetails(details: any){
    return this.http.post<any>("http://localhost:3000/predictionDetails", details)
  }*/
  getPredictionResults(): Observable<IResults[]>{
    return this.http.get('http://localhost:3000/predictionDetails').pipe(
      map(res => {
        const resultsArray: Array<IResults> = [];
        for (const id in res) {
          resultsArray.push(res[id]);
        }
        return resultsArray;
      })
    );
  }

  getResult(id: number){
    return this.getPredictionResults().pipe(
      map(resultsArray=> {
        return resultsArray.find(r => r.id === id)})
    );
  }

  postPredictionResults(data : any){
    return this.http.post<any>("http://localhost:3000/predictionDetails", data);
  }

  /*results(){
    return this.http.get('http://localhost:3000/predictionResults')
  }*/
}

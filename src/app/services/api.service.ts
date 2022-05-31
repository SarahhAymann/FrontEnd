
import { IResults } from './../Pages/IResults.interface';
import { IProperty } from './../Pages/IProperty.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Property } from '../Pages/property';

/**export interface dataSetItems{
   id: number,
  Name: string,
  PriceinEGP:number,
  Type:string,
  Bedrooms:number,
  Bathrooms:number,
  Areainsqm:number,
  Location:string,
  Level:number,
  Garden:number,
  Comments:string,
  Sold:number,
  Finished:number,
  sellerID:number,
  Date:Date,
}*/

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  
  postEmp(data :any){
    return this.http.post<any>("http://localhost:3000/employee-list/",data);
  }
  getEmp(){
    return this.http.get<any>("http://localhost:3000/employee-list/");
  }
  putEmp(data:any,id: number){
    return this.http.put<any>("http://localhost:3000/employee-list/"+id,data);
  }
  deleteEmp(id:number){
    return this.http.delete<any>("http://localhost:3000/employee-list/"+id);
  }
  postProp(data :any){
    return this.http.post<any>("http://localhost:3000/properties-list/",data);
  }
  getProp(){
    return this.http.get<any>("http://localhost:3000/properties-list/");
  }
  putProp(data:any,id: number){
    return this.http.put<any>("http://localhost:3000/properties-list/"+id,data);
  }
  deleteProp(id:number){
    return this.http.delete<any>("http://localhost:3000/properties-list/"+id);
  }
  postCons(data :any){
    return this.http.post<any>("http://localhost:3000/Constraints/",data);
  }
  getCons(){
    return this.http.get<any>("http://localhost:3000/Constraints/");
  }
  putCons(data :any,id:number){
    return this.http.put<any>("http://localhost:3000/Constraints/"+id,data);
  }
  deleteCons(id:number){
    return this.http.delete<any>("http://localhost:3000/Constraints/"+id);
  }
  postQuer(data :any){
    return this.http.post<any>("http://localhost:3000/queries/",data);
  }
  putQuer(data:any,id: number){
    return this.http.put<any>("http://localhost:3000/queries"+id,data);
  }
  getQuer(){
    return this.http.get<any>("http://localhost:3000/queries/");
  }
  postFilterQuer(data :any){
    return this.http.post<any>("http://localhost:3000/filterqueries/",data);
  }
  putFilterQuer(data:any,id: number){
    return this.http.put<any>("http://localhost:3000/filterqueries"+id,data);
  }
  getfilterQuer(){
    return this.http.get<any>("http://localhost:3000/filterqueries/");
  }
  
  getdatset(){
    return this.http.get<any>("http://localhost:3000/dataset");
  }
  getData(){
    return this.http.get<any>("http://localhost:3000/data");
  }
  getCount(){
    return this.http.get<any>("http://localhost:3000/count");
  }
  getSum(){
    return this.http.get<any>("http://localhost:3000/sum");
  }
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

  getResult(area: number){
    return this.getPredictionResults().pipe(
      map(resultsArray=> {
        return resultsArray.find(r => r.area === area)})
    );
  }

  postPredictionResults(data : any){
    return this.http.post<any>("http://localhost:3000/predictionDetails", data);
  }

  /*results(){
    return this.http.get('http://localhost:3000/predictionResults')
  }*/
}

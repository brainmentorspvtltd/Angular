import { Injectable } from "@angular/core";
import { ItemModel } from "../models/itemmodel";
import {HttpClient} from '@angular/common/http';
@Injectable()
export class CrudService{
  itemArray:ItemModel[]=[];
  constructor(private http:HttpClient){

  }

  add(itemModelObject:ItemModel):void{
  this.itemArray.push(itemModelObject);
  }

  getItems():ItemModel[]{
    return this.itemArray;
  }

  getItemsFromServer(){
    const url = 'http://localhost:8080/Angular4-Example/JSONServlet';
    return this.http.get<ItemModel[]>(url);
    //this.http.post(url,{name:'Ram',age:21});
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  public stringVar = new Subject<string>();

  //Create an observable
  getObservable(): Subject<string>{
    return this.stringVar;
  }
  //Update the subject
  public setValue(newStringVar: string){
    this.stringVar.next(newStringVar)
  }

  constructor() { }

  value:string;

  getValue() : string{
    return this.value;
  }
 

}

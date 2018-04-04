import {Component} from '@angular/core';

/**
 * @title Basic table
 */
@Component({
  selector: 'cars',
  styleUrls: ['cars.component.css'],
  templateUrl: 'cars.component.html',
})
export class CarsComponent {
  displayedColumns = ['position', 'name', 'Type', 'Brand'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  name: string;
  position: number;
  Type: String;
  Brand: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Acura', Type:'sedan', Brand:'Honda' },
  {position: 2, name: 'lexus', Type:'suv' ,Brand:'toyota' },
  {position: 3, name: 'Audi', Type: 'sedan', Brand: 'audi'},
  {position: 4, name: 'Lincon', Type: 'sedan' ,Brand: 'Gm'},
  {position: 5, name: 'Mercedes', Type: 'sports',Brand:'Mersedes'},
  {position: 6, name: 'Explorer', Type: 'suv' ,Brand:'ford'},
  {position: 7, name: 'Altima', Type: 'sedan' ,Brand: 'nissan'},
  {position: 8, name: 'jaguar', Type: 'luxury' ,Brand: 'tata'},
  {position: 9, name: 'Land rover', Type: 'sport', Brand: 'rang rover'},
  {position: 10,name: 'i735', Type: 'race' ,Brand: 'Bmw'},

]

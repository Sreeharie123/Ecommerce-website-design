import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  product: name[] = [
    { name: 'All Categorry' },
    { name: 'Gadgets' },
    { name: 'Clothes' },
    { name: 'Accesory' },
    { name: 'All products' },
    { name: 'Clothes and Wears'},
    { name: 'Home interiors'},
    { name: 'Computer and tech'},
    { name: 'Tools,equipments'},
    { name: 'Spots and outdoors'},
    // { name: 'Animal and pets'},
    // { name: 'Machinery tools'},
    // { name: 'More category'}
];
}
interface name {
  name: string;
}

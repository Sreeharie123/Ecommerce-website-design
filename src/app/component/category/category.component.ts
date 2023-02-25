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

];
}
interface name {
  name: string;
}

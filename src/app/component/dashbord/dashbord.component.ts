import { Component } from '@angular/core';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, of, catchError } from 'rxjs';


@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent {
  date:name[]=[
    {date:13,hour:"Hour"},
    {date:34,hour:"Min"},
    {date:56,hour:"Sec"},
  ]

  items:any=[];
  data$ = fromFetch('https://dummyjson.com/products').pipe(
  switchMap(response => {
    if (response.ok) {
      return response.json();
    } else {
      return of({ error: true, message: `Error ${ response.status }` });
    }
  }),
  catchError(err => {
    console.error(err);
    return of({ error: true, message: err.message })
  })
).subscribe((data)=>{
 console.log(data);
 this.items=data.products
} )

}
interface name{
  date:number,
  hour:string
}
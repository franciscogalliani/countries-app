import { Component } from '@angular/core';
import { Route } from '../../interfaces/Route';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  public routes:Route[] = [
    {text:'Por capital', url: 'countries/by-capital'},
    {text:'Por país', url: 'countries/by-country'},
    {text:'Por Región', url: 'countries/by-region'},
  ]

}

import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { SearchType } from '../../interfaces/searchType';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

  public countries: Country[] = [];

  constructor( private countriesService:CountriesService ) {}

  searchCountry( term: string ):void {
    this.countriesService.searchCountry( SearchType.Region, term )
    .subscribe( countries => {
      this.countries = countries;
    })
  }
  
}

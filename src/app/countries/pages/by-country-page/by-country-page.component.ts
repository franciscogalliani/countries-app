import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { SearchType } from '../../interfaces/searchType';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {

  public countries: Country[] = [];
  
  constructor( private countriesService:CountriesService ) {}

  searchCountry( term: string ):void {
    this.countriesService.searchCountry( SearchType.Country, term )
    .subscribe( countries => {
      this.countries = countries;
    })
  }

}

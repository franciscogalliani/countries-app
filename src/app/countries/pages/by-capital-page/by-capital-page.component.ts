import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { SearchType } from '../../interfaces/searchType';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor( private countriesService:CountriesService ) {}

  searchCountry( term: string ):void {
    this.countriesService.searchCountry( SearchType.Capital, term )
    .subscribe( countries => {
      this.countries = countries;
    })
  }
  
}

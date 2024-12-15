import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit {

  public country?: Country;
  get translations(): string[]  {
    return Object.keys(this.country?.translations ?? {})
  }

  constructor(
     private activatedRoute: ActivatedRoute,
     private countriesService:CountriesService,
     private router: Router
     ) {}

  private handleUrl(country: Country | null): Promise<Boolean> | Country {
    if(!country) return this.router.navigateByUrl('');
    return this.country = country;
  }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.countriesService.searchCountryById( id )  )
    )
    .subscribe( country => this.handleUrl(country))
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';
import { SearchType } from '../interfaces/searchType';


@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiUrl:string = 'https://restcountries.com/v3.1'

    constructor(private http: HttpClient) { }

    searchCountry( by:SearchType, term:string ): Observable<Country[]> {
        const url:string = `${ this.apiUrl }/${by}/${ term }`;
        return this.http.get<Country[]>( url )
            .pipe(
                catchError( () => of([]) )
            );
    }

    searchCountryById( code:string ): Observable<Country | null>{
        const url:string = `${ this.apiUrl }/alpha/${code}`;
        return this.http.get<Country[]>(url)
            .pipe(
                map( countries => countries.length > 0 ? countries[0] : null),
                catchError( () => of(null) )
            )
    }

    
}
import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import { Restaurant } from "./restaurant/restaurant.model"
import { MEAT_API } from '../app.api'
import { ErrorHandler } from '../app.error-handle'
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';

@Injectable()

export class RestaurantsService {

    constructor(private http: HttpClient){}

    restaurants(search?: string): Observable<Restaurant[]> {

        let params: HttpParams = undefined
        if(search){
            params = new HttpParams().append('q', search)
        }

        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, {params: params})
    }

    restaurantById(id: string): Observable<Restaurant>{
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
    }

    reviewsOfRestaurant(id: string): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    }

    menuOfRestaurants(id: string): Observable<MenuItem[]>{
        return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
    }

}
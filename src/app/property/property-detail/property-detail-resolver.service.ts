import  { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/services/products.service';

@Injectable({
    providedIn: 'root'
})
export class PropertyDetailResolverService implements Resolve<Product>{

    constructor(private router: Router, private prodServ: ProductsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product>|Product{
        const prodId = route.params['id'];
        return this.prodServ.getProduct(+prodId).pipe(
            catchError(error => {
                this.router.navigate(['/']);
                return of(null);
            })
        );
    }

}
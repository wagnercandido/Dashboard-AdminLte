import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


export abstract class Service {
    protected urlBase  = environment.URL_BASE;
    protected headers =  new HttpHeaders().set('Content-Type', 'application/json');
}

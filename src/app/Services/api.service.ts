import { HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

export const ApiService = {

    urlBase: environment.URL_BASE,
    headers: new HttpHeaders().set('Content-Type', 'application/json')

}
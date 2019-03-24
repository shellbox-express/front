import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent {
    constructor(private http: HttpClient) {}
    url = "http://gmmk7fjlvf.execute-api.us-east-1.amazonaws.com/dev";
    update() {
        this.http.get( this.url + '/purchases').subscribe(data => {
            console.log('Response API Products', data);
          });  
    }
}

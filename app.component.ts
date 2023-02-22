import { Component, OnInit, ViewChild } from '@angular/core';
import { orderDetails } from './data';
import {GridComponent} from '@syncfusion/ej2-angular-grids';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    public data: Object[] = [];
    @ViewChild('grid', {static: false}) public Grid: GridComponent;

    ngOnInit(): void {
        this.data = orderDetails;
    }
    click(e){
      console.log(this.Grid.allowPaging);
    }
}
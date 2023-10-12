import { Component, OnInit, OnDestroy, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'pages',
    templateUrl: './pages.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class PagesComponent implements OnInit, OnDestroy {


    // @Private Properties
    private _unsubscribeAll: Subject<any> = new Subject;


    /**
    * Constructor
    */
    constructor() { }


    //--------------------------------------------------------------------------------
    // @Lifecycle Hooks
    //--------------------------------------------------------------------------------

    /**
    * OnInit
    */
    ngOnInit(): void {

    }

    /**
    * OnDestroy
    */
    ngOnDestroy() {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }


    //--------------------------------------------------------------------------------
    // @Public Methods
    //--------------------------------------------------------------------------------


}
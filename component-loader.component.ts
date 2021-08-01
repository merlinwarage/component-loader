import { Component, ComponentFactoryResolver, EventEmitter, Input, OnChanges, Output, SimpleChanges, Type, ViewChild } from '@angular/core';
import { ComponentLoaderDirective } from '@app/common/component-loader/component-loader.directive';

export interface ComponentLoaderInterface {
    component: Type<any>;
    componentInitData?: Array<object>;
}

export interface ComponentLoaderInput {
    name: string;
    payload: any;
}

export interface ComponentLoaderBase {
    data: any;
}

@Component( {
    selector: 'app-component-loader',
    templateUrl: './component-loader.component.html'
} )
export class ComponentLoaderComponent implements OnChanges {

    @Input() data: ComponentLoaderInterface;
    @Output() readonly done = new EventEmitter<any>();
    @ViewChild( ComponentLoaderDirective, { static: true } ) detailHost: ComponentLoaderDirective;

    constructor( private componentFactoryResolver: ComponentFactoryResolver ) {}

    ngOnChanges( changes: SimpleChanges ): void {
        this.loadComponent( changes.data.currentValue );
    }

    private loadComponent( payload: ComponentLoaderInterface ): void {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory( payload.component );
        const viewContainerRef = this.detailHost.viewContainerRef;
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent( componentFactory );
        this.data.componentInitData.forEach( ( input: ComponentLoaderInput ) => (componentRef.instance)[ input.name ] = input.payload );
        componentRef.instance.done.subscribe( data => this.done.emit( data ) );
    }
}

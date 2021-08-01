import { Directive, ViewContainerRef } from '@angular/core';

@Directive( {
    selector: '[component]'
} )
export class ComponentLoaderDirective {
    constructor( public viewContainerRef: ViewContainerRef ) {}
}

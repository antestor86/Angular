import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appburger]'
})

export class BurgerDirective implements OnInit {
    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {

    }

    @Input() set while(cond: boolean) {
        if (cond) {
            this.viewContainer.createEmbeddedView(this.templateRef)
        }
        else {
            this.viewContainer.clear()
        }
    }
    ngOnInit(): void {

    }




}
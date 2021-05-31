import { Directive, ElementRef,Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appActivebutton]'
})
export class ActivebuttonDirective {

  constructor(private button:ElementRef,private renderbtn:Renderer2) {

   }
   clicks = 1;

   @HostListener('mouseenter') enterBtn(){
     this.renderbtn.setStyle(this.button.nativeElement,'backgroundColor','grey')
     this.renderbtn.setStyle(this.button.nativeElement,'cursor','pointer')
   }
   @HostListener('mouseleave') overBtn(){
    this.renderbtn.removeStyle(this.button.nativeElement,'backgroundColor');
    this.renderbtn.removeStyle(this.button.nativeElement,'cursor');

  }

 


}

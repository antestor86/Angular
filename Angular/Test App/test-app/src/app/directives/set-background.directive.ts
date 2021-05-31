import { Directive,ElementRef,Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appSetBAckground]'
})
export class SetBAckgroundDirective implements OnInit {

  constructor(private elem:ElementRef,private renderer:Renderer2) {
      
   }
   @HostListener('click',['$event']) onClick(event:Event){
     console.log(event.target)
   }
   @HostListener('mouseenter') onMouseenter(){
     this.changeColor('5px solid blue')
   }

  @HostListener('mouseleave') onMouseleave() {
    this.changeColor(null)
  }

   private changeColor(color:string){
     this.renderer.setStyle(this.elem.nativeElement,'border',color)
     
   }


}

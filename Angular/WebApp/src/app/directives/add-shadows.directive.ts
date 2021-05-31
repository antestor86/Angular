import { Directive,ElementRef,Renderer2 ,HostListener} from '@angular/core';

@Directive({
  selector: '[appAddShadows]'
})
export class AddShadowsDirective {

  constructor(private elem:ElementRef,private render:Renderer2) {

   }
   clicks = 1;
   @HostListener('mouseenter') onMouseEnter(){
     this.render.addClass(this.elem.nativeElement,'addShadow')
   }

   @HostListener('mouseleave') onMouseLeave(){
    this.render.removeClass(this.elem.nativeElement,'addShadow')
  }

  @HostListener('click',['$event']) onClick(event:Event){
    this.clicks+=1;
    if(this.clicks%2==0){
      this.render.addClass(event.target,'showFrame')
      console.log(event.target)
    }
    else{
      this.render.removeClass(event.target,'showFrame')
    }

  }


}

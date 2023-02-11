import { Directive,ElementRef,Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[add-color]'
})
export class AddColorDirective {
  onclicks = 1;
  constructor(private element:ElementRef,private renderer:Renderer2) { 
    
  }

  @HostListener('mouseenter') onMouseenter(){
    this.renderer.addClass(this.element.nativeElement,'items');
    
  }
  @HostListener('mouseleave') onMouseleave(){
    this.renderer.removeClass(this.element.nativeElement,'items');
    
  }
  @HostListener('click',['$event']) onClick(event:Event){
    this.onclicks+=1;
    if(this.onclicks%2==0){
      this.renderer.setStyle(event.target,'color','red');
      
    }
    else{
      this.renderer.removeStyle(event.target,'color');
      
    }
    
    
  }

}

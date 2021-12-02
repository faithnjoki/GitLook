import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ggAlert404]'
})
export class Alert404Directive {
  element=ElementRef
  constructor(private elem: ElementRef) { }
  @HostListener ("mouseenter") hover(){
    alert("Oooops!! You are lost!! Close page if you are not navigating to home page!")
  }
}

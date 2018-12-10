import { Component, ViewChild, Renderer, Input } from '@angular/core';

/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent {
  @Input() tip:any;
  @Input() description:any;
  @Input() color:any;
  @Input() code:any;
  state = false;
  @ViewChild('content') cardContent: any;
  @ViewChild('heading') heading: any;
  constructor(private renderer: Renderer) {
  }

  ngOnInit(){
    this.renderer.setElementStyle(this.heading.nativeElement, 'background', `${this.code}`)
  }

  ionViewDidLoad() {

  }

  toggle(){
    if(this.state){
      this.renderer.setElementStyle(this.cardContent.nativeElement, 'max-height', '0px');
    }else{
      this.renderer.setElementStyle(this.cardContent.nativeElement, 'max-height', '50rem');
    }

    this.state = !this.state;
  }
}

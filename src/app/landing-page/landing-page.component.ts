import { Component } from '@angular/core';
import { RIGHT } from 'phaser';
import SimpleParallax from 'simple-parallax-js';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  slickCarouselConfig = {
    infinite: true,
    slidesToShow: 6,
    slidestoScroll: 1,
    arrows: true
  }


  ngAfterViewInit(){
    const scene1 = document.getElementsByClassName('parallax-1');
    const parallaxInstance1 = new SimpleParallax(scene1, {
      delay: .6,
	    transition: 'cubic-bezier(0,0,0,1)',
    });

    const scene2 = document.getElementsByClassName('parallax-2');
    const parallaxInstance2 = new SimpleParallax(scene2, {
      overflow: true,
      scale: 1.5
    });

    const scene3 = document.getElementsByClassName('parallax-3');
    const parallaxInstance3 = new SimpleParallax(scene3, {
      overflow: true,
      orientation: 'right'
    });

    const scene4 = document.getElementsByClassName('parallax-4');
    const parallaxInstance4 = new SimpleParallax(scene4, {
      orientation: 'right'
    });
    
    const scene5 = document.getElementsByClassName('parallax-4-1');
    const parallaxInstance5 = new SimpleParallax(scene5, {
      orientation: 'left'
    });
  }
}

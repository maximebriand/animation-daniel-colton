import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin); // Register ScrollTo plugin

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    this.menuAnimation();
    this.contentAnimation();
  }

  menuAnimation() {
    gsap.from(document.querySelector('header > div'), {
      delay: 0.4,
      duration: 0.8,
      x: -30,
      opacity: 0,
      stagger: 0.25,
    });

    gsap.from(document.querySelectorAll('header nav ul li'), {
      delay: 0.8,
      duration: 0.8,
      y: 30,
      opacity: 0,
      stagger: 0.25,
    });

    gsap.from(document.querySelector('aside > .language'), {
      delay: 0.4,
      duration: 0.8,
      x: -30,
      opacity: 0,
      stagger: 0.25,
    });

    gsap.from(document.querySelectorAll('aside .social li'), {
      delay: 1,
      duration: 0.8,
      y: 30,
      opacity: 0,
      stagger: 0.25,
    });
  }
  contentAnimation() {
    // Portrait
    gsap.from(document.querySelector('.portrait'), {
      delay: 1,
      duration: 0.8,
      x: -300,
      opacity: 0,
      stagger: 0.25,
      zIndex: -1,
    });
    gsap.from(document.querySelector('h1'), {
      delay: 1.3,
      duration: 2.5,
      opacity: 0,
    });
    gsap.from(document.querySelector('.portrait h2'), {
      delay: 2,
      duration: 1.5,
      opacity: 0,
      x: -30,
    });
    gsap.from(document.querySelector('.subtitle h2'), {
      delay: 2.5,
      duration: 1.5,
      opacity: 0,
      y: -30,
    });

    // about
    gsap.from(document.querySelector('.about h2'), {
      delay: 2.5,
      duration: 1.5,
      opacity: 0,
      y: -30,
    });
    gsap.from(document.querySelector('.about p'), {
      delay: 2,
      duration: 1,
      opacity: 0,
    });

    // works
    gsap.from(document.querySelector('.works h3'), {
      delay: 2.5,
      duration: 1.5,
      opacity: 0,
      zIndex:2,
      y: -30,
    });

    gsap.from(document.querySelector('.works li:nth-child(1)'), {
      delay: 2.5,
      duration: 1.5,
      opacity: 0,
      x: 50,
    });

    gsap.from(document.querySelectorAll('.works li:nth-child(2) img'), {
      delay: 2.8,
      duration: 0.8,
      x: 300,
      opacity: 0,
      stagger: 0.25,
    });
    gsap.from(document.querySelectorAll('.works li:nth-child(3) img'), {
      delay: 3.3,
      duration: 0.8,
      y: 300,
      opacity: 0,
      stagger: 0.25,
    });
    gsap.from(document.querySelectorAll('.works li:nth-child(4) img'), {
      delay: 4.3,
      duration: 0.8,
      x: 300,
      opacity: 0,
      stagger: 0.25,
    });
  }
}

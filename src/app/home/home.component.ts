
import { Component, AfterViewInit } from '@angular/core';
import * as anime from 'animejs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit{
  
  ngAfterViewInit(): void {

    const container = document.querySelector('.container')
        for (var i=0;i<=100;i++){
            const blocks = document.createElement('div');
            blocks.classList.add('blocks');
            container!.appendChild(blocks);
        }

        function animateBlocks(){
            anime({
                targets: '.blocks',
                translateX: function(){
                    return anime.random(-700,700);
                },
                translateY: function(){
                    return anime.random(-500,500);
                },
                scale: function(){
                    return anime.random(1,5);
                },

                easing: 'linear',
                duration: 3000,
                delay: anime.stagger(10),
                complete: animateBlocks,
            })
        }

        animateBlocks()
  }

  



}

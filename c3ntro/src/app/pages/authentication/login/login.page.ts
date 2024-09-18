import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
@ViewChild('suiperEx')
swiperEx?: ElementRef<{ swiper: Swiper}>;

swiperImages = [
  '../../assets/images/slides/art.jpg',
  '../../assets/images/slides/img-login.jpg',
  '../../assets/images/slides/art.jpg',
  '../../assets/images/slides/img3.jpg',
  '../../assets/images/slides/img4.jpg',
]

  constructor() { }

  ngOnInit() {
  }

}

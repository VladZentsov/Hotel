import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  public isButtonPressed = false

  public isExpandMenuButtonPressed = false

  OnMenuButtonClick() {
    if(this.isButtonPressed)
    {
      this.isButtonPressed = false
    }
    else{
      this.isButtonPressed = true
    }
    this.scroll();
  }

  OnExpandMenuButtonClick(){
    if(this.isExpandMenuButtonPressed){
      this.isExpandMenuButtonPressed = false
      document.getElementById("myNav")?.style.setProperty('width','0%')
      document.getElementById("navbar")?.style.setProperty('opacity','1')
    } else{
      document.getElementById("myNav")?.style.setProperty('width','100%')
      document.getElementById("navbar")?.style.setProperty('opacity','0')
      this.isExpandMenuButtonPressed = true
    }
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {

    let scrollHeigth=500;

      if(window.scrollY >= scrollHeigth || this.isButtonPressed){
        document.body.style.setProperty('--navbar-scroll', "white");
        document.body.style.setProperty('--navbar-scroll-text', "black");
        document.body.style.setProperty('--navbar-scroll-shadow', "0px 6px 12px -5px #000000");
      }else if(window.scrollY < scrollHeigth){
        document.body.style.setProperty('--navbar-scroll', "transparent");
        document.body.style.setProperty('--navbar-scroll-text', "white");
        document.body.style.setProperty('--navbar-scroll-shadow', "none");
      }
  }

}

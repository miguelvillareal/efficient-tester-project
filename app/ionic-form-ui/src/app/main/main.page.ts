import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';



@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  vid = 'https://youtube.com/embed/1-VAhbOwsOY';
  constructor(private authService: AuthenticationService, private router: Router,
    private dom: DomSanitizer, private inAppBrowser: InAppBrowser) {}

  sanitize(vid){
    return this.dom.bypassSecurityTrustResourceUrl(vid);
  }

  redirect(){
    this.router.navigateByUrl("/lab-group");
  }

  redirectTwo(){
    this.router.navigateByUrl("/protocols");
  }

  redirectThree(){
    this.inAppBrowser.create("https://ceias.nau.edu/capstone/projects/CS/2021/EfficientTest-F20/");
  }

  ngOnInit() {
  }

}

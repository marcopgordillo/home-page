import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbar/navbar.component';
import {CollapseModule} from 'ngx-bootstrap';
import {WelcomeComponent} from './welcome/welcome.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faGlobe, faMapMarkerAlt, faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope, faSmileBeam, faSmileWink} from '@fortawesome/free-regular-svg-icons';
import {faFacebookF, faGithub, faInstagram, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {SocialMenuComponent} from './social-menu/social-menu.component';
import {AboutComponent} from './about/about.component';
import {SkillsComponent} from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    SocialMenuComponent,
    AboutComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faSmileWink, faSmileBeam, faFacebookF, faTwitter, faLinkedinIn, faInstagram, faGithub, faMapMarkerAlt, faGlobe, faEnvelope, faPhone);
  }
}

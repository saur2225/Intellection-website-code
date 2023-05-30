import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ItlHomeComponent } from './itl-home/itl-home.component';
import { ItlHeaderComponent } from './itl-header/itl-header.component';
import { ItlButtonComponent } from './generic-components/itl-button/itl-button.component';
import { ItlHomeWhatWeDoComponent } from './itl-home-what-we-do/itl-home-what-we-do.component';
import { ItlContactComponent } from './itl-contact/itl-contact.component';
import { ItlFooterComponent } from './itl-footer/itl-footer.component';
import { ItlPricingComponent } from './itl-pricing/itl-pricing.component';
import { ItlPricingCardComponent } from './itl-pricing/itl-pricing-card/itl-pricing-card.component';

import { AppRoutingModule } from './app-routing.module';
import { ItlWhatWeDoComponent } from './itl-what-we-do/itl-what-we-do.component';
import { OfferingsComponent } from './offerings/offerings.component';
import { OfferingCardComponent } from './offerings/offering-card/offering-card.component';
import { ItlAboutComponent } from './itl-about/itl-about.component';
import { ItlOathComponent } from './itl-oath/itl-oath.component';
import { OathBatchComponent } from './itl-oath/oath-batch/oath-batch.component';
import { ItlSocialComponent } from './itl-social/itl-social.component';
import { ItlGenericFormComponent } from './itl-generic-form/itl-generic-form.component';
import { OathCertificateComponent } from './itl-oath/oath-certificate/oath-certificate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ItlBookDemoComponent } from './itl-book-demo/itl-book-demo.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
@NgModule({
  declarations: [
    AppComponent,
    ItlHomeComponent,
    ItlHeaderComponent,
    ItlButtonComponent,
    ItlHomeWhatWeDoComponent,
    ItlContactComponent,
    ItlFooterComponent,
    ItlPricingComponent,
    ItlPricingCardComponent,
    ItlWhatWeDoComponent,
    OfferingsComponent,
    OfferingCardComponent,
    ItlAboutComponent,
    ItlOathComponent,
    OathBatchComponent,
    ItlSocialComponent,
    ItlGenericFormComponent,
    OathCertificateComponent,
    ItlBookDemoComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    DisclaimerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItlPricingComponent } from './itl-pricing/itl-pricing.component';
import { ItlHomeComponent } from './itl-home/itl-home.component';
import { ItlWhatWeDoComponent } from './itl-what-we-do/itl-what-we-do.component';
import { OfferingsComponent } from './offerings/offerings.component';
import { ItlAboutComponent } from './itl-about/itl-about.component';
import { ItlOathComponent } from './itl-oath/itl-oath.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';

const routes: Routes = [
{ path: '', component: ItlHomeComponent },
{ path: 'pricing', component: ItlPricingComponent },
{ path: 'what-we-do', component: ItlWhatWeDoComponent },
{ path: 'offerings', component: OfferingsComponent },
{ path: 'about', component: ItlAboutComponent },
{ path: 'take-oath', component: ItlOathComponent},
{ path: 'terms-and-conditions', component: TermsAndConditionsComponent},
{ path: 'privacy-policy', component: PrivacyPolicyComponent},
{ path: 'disclaimer', component: DisclaimerComponent},

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
providers: []
})
export class AppRoutingModule { }

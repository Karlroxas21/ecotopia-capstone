import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscapeRoomComponent } from './games/escape-room/escape-room.component';
import { NewsFeaturesComponent } from './news-features/news-features.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CurrentIssueComponent } from './current-issue/current-issue.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgxImageComparisonSliderModule } from 'ngx-image-comparison-slider';
import { CasesComponent } from './problems/cases.component';
import { OverviewOfClimateChangeComponent } from './overview-of-climate-change/overview-of-climate-change.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { ExploreComponent } from './explore/explore.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HistoryComponent } from './history/history.component';
import { WebtoonComponent } from './webtoon/webtoon.component';
import { InteractivevideoComponent } from './interactivevideo/interactivevideo.component';
import { AdminCasesComponent } from './admin-cases/admin-cases.component';
import { AdminSolutionsComponent } from './admin-solutions/admin-solutions.component';
import { AdminWebtoonComponent } from './admin-webtoon/admin-webtoon.component';
import { AdminInteractivevideoComponent } from './admin-interactivevideo/admin-interactivevideo.component';
import { AdminBodyComponent } from './admin-body/admin-body.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ADMINComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { ProblemtrashComponent } from './problemtrash/problemtrash.component';
import { CausesofclimatechangeComponent } from './causesofclimatechange/causesofclimatechange.component';
import { EffectsofclimatechangeComponent } from './effectsofclimatechange/effectsofclimatechange.component';
import { WhyshouldwetakeactionComponent } from './whyshouldwetakeaction/whyshouldwetakeaction.component';
import { OthersolutionsComponent } from './othersolutions/othersolutions.component';
import { RespondingtoclimatechangeComponent } from './respondingtoclimatechange/respondingtoclimatechange.component';
import { GovernmentresourcesComponent } from './governmentresources/governmentresources.component';
import { ProblemjeepoutdatedengineComponent } from './problemjeepoutdatedengine/problemjeepoutdatedengine.component';
import { AssessmentComponent } from './assessment/assessment.component';


@NgModule({
  declarations: [
    AppComponent,
    EscapeRoomComponent,
    NewsFeaturesComponent,
    FooterComponent,
    HomeComponent,
    CasesComponent,
    CurrentIssueComponent,
    LandingPageComponent,
    OverviewOfClimateChangeComponent,
    SolutionsComponent,
    ExploreComponent,
    AboutusComponent,
    HistoryComponent,
    WebtoonComponent,
    InteractivevideoComponent,
    AdminCasesComponent,
    AdminSolutionsComponent,
    AdminWebtoonComponent,
    AdminInteractivevideoComponent,
    AdminBodyComponent,
    AdminSidenavComponent,
    AdminHomeComponent,
    ADMINComponent,
    ProblemtrashComponent,
    CausesofclimatechangeComponent,
    EffectsofclimatechangeComponent,
    WhyshouldwetakeactionComponent,
    OthersolutionsComponent,
    RespondingtoclimatechangeComponent,
    GovernmentresourcesComponent,
    ProblemjeepoutdatedengineComponent,
    AssessmentComponent,

  ],
  imports: [
    BrowserModule,
    AdminRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    NgxImageComparisonSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

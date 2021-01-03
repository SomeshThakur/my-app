import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { CreationDateDirective } from './creation-date.directive';
import { DurationPipe } from './duration.pipe';
import { OrderByPipe } from './order-by.pipe';
import { FilterPipe } from './filter.pipe';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';

const components = [
  HeaderComponent,
  FooterComponent,
  LogoComponent,
  CreationDateDirective,
  DurationPipe,
  OrderByPipe,
  FilterPipe,
  LoginComponent,
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [CommonModule],
})
export class SharedModule {}

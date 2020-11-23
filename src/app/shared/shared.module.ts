import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { CreationDateDirective } from './creation-date.directive';

const components = [
  HeaderComponent,
  FooterComponent,
  LogoComponent,
  CreationDateDirective,
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [CommonModule],
})
export class SharedModule {}

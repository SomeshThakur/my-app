import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';

const components = [HeaderComponent, FooterComponent, LogoComponent];

@NgModule({
  declarations: components,
  exports: components,
  imports: [CommonModule],
})
export class SharedModule {}
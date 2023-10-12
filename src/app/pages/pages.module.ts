import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { pagesRoutes } from './pages.routes';
@NgModule({
  declarations: [PagesComponent],
  imports: [
    RouterModule.forChild(pagesRoutes),
  ],
  exports: [PagesComponent],
})
export class PagesModule {}

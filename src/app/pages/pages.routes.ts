import { Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { SundaysComponent } from "./sundays/sundays.component";
export const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent
    },
    {
        path : 'sundays',
        component: SundaysComponent,
        loadChildren: () => import('./sundays/sundays.module').then(m => m.SundaysModule)
    }
]
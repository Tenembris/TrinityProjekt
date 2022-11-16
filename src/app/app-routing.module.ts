import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { ToDoPageComponent } from './to-do-page/to-do-page.component';

const routes: Routes = [
  { path: 'slider', component: SliderComponent },
  { path: 'to-do-page', component: ToDoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponent = [SliderComponent, ToDoPageComponent];

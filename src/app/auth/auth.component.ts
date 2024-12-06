import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';



@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  animations: [
    trigger('routerFadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AuthComponent {
  constructor(private context: ChildrenOutletContexts) { }

  getRouteUrl() {
    return this.context.getContext('primary')?.route?.url;
  }

}

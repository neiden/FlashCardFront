import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AsyncPipe, NgIf, NgTemplateOutlet } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { LoadingIndicatorService } from '../Services/loading-indicator.service';

@Component({
  selector: 'app-loadingindicator',
  templateUrl: './loadingindicator.component.html',
  styleUrls: ['./loadingindicator.component.css'],
  imports:[MatProgressSpinnerModule, NgIf, NgTemplateOutlet, AsyncPipe],
  standalone: true
})
export class LoadingindicatorComponent implements OnInit{
  loading$: Observable<boolean>;

  @Input()
  detectRouteTransitions = false;

  @ContentChild("loading")
  customLoadingIndicator: TemplateRef<any> | null = null;

  constructor(private loadingService: LoadingIndicatorService, private router: Router) { 
    this.loading$ = this.loadingService.loading$;
  }



  ngOnInit(): void {
    if (this.detectRouteTransitions) {
    this.router.events
      .pipe(
        tap((event) => {
          if (event instanceof RouteConfigLoadStart) {
            this.loadingService.loadingOn();
          } else if (event instanceof RouteConfigLoadEnd) {
            this.loadingService.loadingOff();
          }
        })
      )
      .subscribe();
      }
    }
}

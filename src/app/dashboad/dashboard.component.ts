import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {CommonModule} from '@angular/common';
import { OverlayBadgeModule} from 'primeng/overlaybadge';
import { IconFieldModule} from 'primeng/iconfield';
import {InputTextModule} from 'primeng/inputtext';
import {InputIconModule} from 'primeng/inputicon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    FormsModule,
    ButtonModule,
    MenuModule,
    CommonModule,
    OverlayBadgeModule,
    IconFieldModule,
    InputTextModule,
    InputIconModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  items = signal([
    {
      label: 'Options',
      items: [
        { label: 'Add New', icon: 'pi pi-fw pi-plus' },
        { label: 'Search', icon: 'pi pi-fw pi-search' }
      ]
    }
  ]);
}

import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Button, ButtonModule } from 'primeng/button';
import { InputText, InputTextModule } from 'primeng/inputtext';
import { Select, SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { Textarea, TextareaModule } from 'primeng/textarea';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    InputTextModule,
    SelectModule,
    FormsModule,
    TextareaModule,
    DatePickerModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'test-ng19';
  router = inject(Router);
  countries: any[] | undefined = [
    {
      name: 'name',
    },
    {
      name: 'name2',
    },
  ];
  selectedCountry: any;

  route2Dashboard() {
    this.router.navigate(['dashboard']);
  }
}

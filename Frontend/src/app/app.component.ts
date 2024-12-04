import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataTransferService } from './services/data-transfer.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [DataTransferService]
})
export class AppComponent {
  title = 'customer';
}

import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header} from './header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, Header],
  templateUrl: './app.html'
})
export class App {}
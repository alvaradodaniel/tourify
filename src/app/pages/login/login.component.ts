import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import 'flowbite';
import { NavbarComponent } from '../../components/navbar/navbar.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
}

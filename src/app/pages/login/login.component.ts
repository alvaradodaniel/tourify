import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import 'flowbite';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
}

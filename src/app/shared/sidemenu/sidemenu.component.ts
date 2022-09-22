import { Component } from '@angular/core';
import { MenuItem } from '../interfaces/menu.interface';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {

  public templateRoutes: MenuItem[] = [
    {
      text: 'Basics',
      path: 'template/basics'
    },
    {
      text: 'Dinamics',
      path: 'template/dinamics'
    },
    {
      text: 'Switches',
      path: 'template/switches'
    }
  ];
  public reactiveRoutes: MenuItem[] = [
    {
      text: 'Basics',
      path: 'reactive/basics'
    },
    {
      text: 'Dinamics',
      path: 'reactive/dinamics'
    },
    {
      text: 'Switches',
      path: 'reactive/switches'
    }
  ];

  public authMenu: MenuItem[] = [
    {
      text: 'Register',
      path: 'auth/register'
    },
    {
      text: 'Login',
      path: 'auth/login'
    }
  ]
}

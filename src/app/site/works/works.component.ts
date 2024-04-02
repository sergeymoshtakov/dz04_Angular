import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {
  works : any[] = [
    {
      title : "ASP .Net Project",
      description : "ASP .Net Project",
      link : "https://github.com/sergeymoshtakov/MyASPProject_Books",
      photo : "https://raw.githubusercontent.com/sergeymoshtakov/MyASPProject_Books/master/Images/pagination.jpg",
    },
    {
      title : "Angular Project",
      description : "Angular Project",
      link : "https://github.com/sergeymoshtakov/angular_react_dz1",
      photo : "https://raw.githubusercontent.com/sergeymoshtakov/angular_react_dz1/master/Images/result.png",
    },
    {
      title : "ADO .Net Project",
      description : "ADO .Net Project",
      link : "https://github.com/sergeymoshtakov/ado_net_final_project",
      photo : "https://raw.githubusercontent.com/sergeymoshtakov/ado_net_final_project/master/screenshots/result.jpg",
    },
  ];
}

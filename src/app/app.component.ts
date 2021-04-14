import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive';

  isAdmin:boolean = true;


  isThisIngredientVital:boolean = true;

  displayGuestList:boolean = true;

  songList:string[] = ["raclette party", "patrick Sebastien", "Fatal bazooka"];

}

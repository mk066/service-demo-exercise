import { Component } from '@angular/core';
import { InteractionService } from './interaction/interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'serviceExercise';

  constructor(private interactionService: InteractionService){}

  greetStudent(){
    this.interactionService.sendMessage('Good Morning!');         //message from teacher(app-component)
  }
}

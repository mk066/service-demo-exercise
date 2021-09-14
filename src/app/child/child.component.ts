import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction/interaction.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private interactionService: InteractionService){}

  ngOnInit(): void {
    this.interactionService.teacherMsg$
    .subscribe(                                   //message is recived from teacher(app-component)
      message => {                                
        if(message='Good Morning!'){              
          alert('Good Morning Teacher!');         //response of student
        }
      }
    );
  }

}

import { Component } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.sass']
})
export class CharacterComponent {
  character: Character = {
    id: 1009146,
    name: "Abomination (Emil Blonsky)",
    description: "Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.",
    modified: "2012-03-20T12:32:12-0400",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04",
      extension: "jpg"
    }
  }
}

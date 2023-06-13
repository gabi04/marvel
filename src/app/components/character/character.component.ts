import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.sass']
})
export class CharacterComponent {
  @Input() character: Character = {
    id: 0,
    name: "",
    description: "",
    modified: "",
    thumbnail: {
      path: "",
      extension: ""
    }
  }
}

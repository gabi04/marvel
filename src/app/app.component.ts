import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  img_base_url = "https://placedog.net/"
  img_size = 500

  charcters = [
    {
      id: 1009146,
      name: "Abomination (Emil Blonsky)",
      description: "Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.",
      modified: "2012-03-20T12:32:12-0400",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04",
        extension: "jpg"
      }
    },
    {
      id: 1016823,
      name: "Abomination (Ultimate)",
      description: "",
      modified: "2012-07-10T19:11:52-0400",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        extension: "jpg"
      }
    },
    {
      id: 1011266,
      name: "Adam Destine",
      description: "",
      modified: "1969-12-31T19:00:00-0500",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        extension: "jpg"
      },
    }
  ]
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  repos: any;

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    // @ts-ignore
    this.repos = (await this.http.get("https://api.github.com/users/borabaloglu/repos").toPromise()).map((repo) => {
      return {
        name: repo.name,
        url: repo.html_url,
        description: repo.description
      }
    });
  }

}

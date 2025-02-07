import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-whyshouldwetakeaction',
  templateUrl: './whyshouldwetakeaction.component.html',
  styleUrls: ['./whyshouldwetakeaction.component.css']
})
export class WhyshouldwetakeactionComponent implements OnInit {
  y_should_we_take_action: any;
  title = "Ecotopia: Why Should We Take Action";

  constructor(private http: HttpClient,
    private titleService: Title) { }

  ngOnInit(): void{
    this.http.get<any[]>(`${environment.apiUrl}whyshouldwetakeactions`)
    .subscribe(incoming_data =>{
      this.y_should_we_take_action = incoming_data;

    });

    this.titleService.setTitle(this.title);
  }

}

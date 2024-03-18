import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { AnnouncementService } from '../services/announcement.service';
//decorator==atribute care contin un set de metadate pt componenta
@Component({
  selector: 'app-announcement',//tagul pe care o sa il apelezi atunci cand chemi componenta
  templateUrl: './announcement.component.html',//specifici path catre template
  styleUrls: ['./announcement.component.scss']//poate contine o lista de path catre mai multe fis scss
})
export class AnnouncementComponent {
@Input()
id:string;
  @Input() message: string;
  @Input() title: string;
  @Input() author: string;
  //output pt a face refresh la pagina dupa delete
  constructor(private announcementService:AnnouncementService){}
  deleteAnnouncement(id:string){
    this.announcementService.deleteAnnuncement(id);
  }
}

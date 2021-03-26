import { Component, HostListener} from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = '';
  content = '';
  shiftArray: any = [];
  viewArray: any = [];
  popup: any;
  copyText: any;
  constructor(private api: ApiService) {

    this.getData();
  }
  // tslint:disable-next-line:typedef
  async getData() {
    const result: any = await this.api.get('http://localhost/Dino2/read.php');
    this.shiftArray = result.data;
    this.shiftArray.reverse();
    this.viewArray = this.shiftArray;
  }

  // tslint:disable-next-line:typedef
  putData() {
    this.api.post('http://localhost/Dino2/insert.php', {
      title: this.title,
      content: this.content
    });
    this.getData();
    this.title = '';
    this.content = '';
  }

  // tslint:disable-next-line:typedef
  delete(d: any) {
    this.api.post('http://localhost/Dino2/delete.php', d);
    this.getData();
  }
  // tslint:disable-next-line:typedef
  cpText(a: any) {
    this.copyText = document.getElementById('created');
    this.copyText.select();
    this.copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');

  }
  // tslint:disable-next-line:typedef
  block() {
    this.popup = document.getElementById('myModal');

    this.popup.style.display = 'block';

  }
  // tslint:disable-next-line:typedef
  close() {
    this.popup.style.display = 'none';
    this.getData();
  }

}

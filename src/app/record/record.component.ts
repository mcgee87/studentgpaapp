import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  title = 'record';
  restItems: any;
  restItemsUrl = 'http://apitest.sertifi.net/api/Students';


  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.getRestItems();
  }
  // Read all REST Items
  getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(this.restItems);
        }
      );
  }


  // Read all REST Items
  getFilterItems(start_year ,  end_year ): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          // this.restItems = restItems;
          this.restItems  = restItems.filter(function(i) {
            return i.StartYear === start_year && i.EndYear === end_year;
          });
          console.log(this.restItems);
        }
      );
 //  console.log('asasa');
  }


  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }


}

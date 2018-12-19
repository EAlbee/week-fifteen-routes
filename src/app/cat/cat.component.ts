import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})

export class CatComponent implements OnInit {
  
  catName = this.route.params.subscribe(params.name);

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

 

  public getCatName() {
    this.catName = this.route.params.subscribe()

  }

}

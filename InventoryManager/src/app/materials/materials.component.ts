import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html'
})
export class MaterialsComponent implements OnInit {
  public materials?: any;
  constructor() { }

  ngOnInit(): void {
  }

}

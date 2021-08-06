import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabin-models',
  templateUrl: './cabin-models.component.html',
  styleUrls: ['./cabin-models.component.css'],
})
export class CabinModelsComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}
}

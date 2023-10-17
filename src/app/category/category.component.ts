import {Component, Input} from '@angular/core';
import {CategoryService} from "../shared/services/category.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  playerName: string = '';
  searchText: string = '';

  constructor(public categoryService: CategoryService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.playerName = params['playerName'];
    });
    this.categoryService.getCategories();
  }

  search() {
    this.categoryService.search(this.searchText);
  }
  clear() {
    this.searchText = '';
    this.categoryService.getCategories();
  }
}

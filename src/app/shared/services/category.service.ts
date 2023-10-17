import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: any[];
  category: any;

  constructor(private http: HttpClient) {
    this.categories = [];
  }

  getCategories() {
    this.categories = [];
    return this.http.get('http://localhost:3000/categories').subscribe((categories: any) => {
      for (const category of categories) {
        this.categories.push({
          id: category.id,
          label: category.label,
        })
      }
    });
  }

  getCategory(categoryId: number) {
    this.http.get(`http://localhost:3000/categories?id=${categoryId}`).subscribe((category: any) => {
      this.category = {
        id: category[0].id,
        label: category[0].label,
      };
    });
  }

  search(searchText: string) {
    this.categories = [];
    this.http.get(`http://localhost:3000/categories?label_like=${searchText}`).subscribe((categories: any) => {
      for (const category of categories) {
        this.categories.push({
          id: category.id,
          label: category.label,
        })
      }
    });
  }
}

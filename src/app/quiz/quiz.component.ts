import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { QuizService } from "../shared/services/quiz.service";
import {CategoryService} from "../shared/services/category.service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  isQuizFinished = this.quizService.isQuizFinished;
  playerName = '';
  categoryId = -1;

  constructor(
    private quizService: QuizService,
    public categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.playerName = params['playerName'];
      this.categoryId = params['categoryId'];
      this.categoryService.getCategory(this.categoryId);
    });
  }

  goToResultPage() {
    this.router.navigate(['/result']);
  }
}

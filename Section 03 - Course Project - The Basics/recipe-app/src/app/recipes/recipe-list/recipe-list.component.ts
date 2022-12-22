import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simple a test', 'https://www.cookipedia.co.uk/wiki/images/e/e7/Bulghur_wheat_salad_recipe.jpg'),
    new Recipe('A test recipe', 'This is simple a test', 'https://www.cookipedia.co.uk/wiki/images/e/e7/Bulghur_wheat_salad_recipe.jpg'),
  ];
}

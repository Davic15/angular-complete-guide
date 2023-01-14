import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe(
            'A test recipe', 
            'This is simple a test', 
            'https://www.cookipedia.co.uk/wiki/images/e/e7/Bulghur_wheat_salad_recipe.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Another test recipe', 
            'This is another simple a test', 
            'https://www.cookipedia.co.uk/wiki/images/e/e7/Bulghur_wheat_salad_recipe.jpg', 
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]),
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        // With this we get a copy of out array.
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1)
        this.recipesChanged.next(this.recipes.slice());
    }
}
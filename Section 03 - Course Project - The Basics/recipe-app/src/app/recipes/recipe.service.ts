import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

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

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
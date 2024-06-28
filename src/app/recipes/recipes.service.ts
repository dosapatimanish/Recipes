import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[]=[{
    id:'R1',
    title:'Coq au Vin (Chicken in Red Wine)',
    imageUrl:'https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr03/2013/2/6/10/enhanced-buzz-wide-28884-1360162844-9.jpg',
    ingredients: ['Chicken','Wine','Spices']
  },
{
  id:'R2',
    title:'Apple Stack Cake',
    imageUrl:'https://assets.bonappetit.com/photos/6411e69003dbf0c8de836651/1:1/w_1920,c_limit/BA0423appalachia19.jpg',
    ingredients: ['Corn Flour','Apple Cedar','Baking Soda']
}
];
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }
  getRecipe(recipeId:string)
  {
    return {...this.recipes.find(recipe => {
      return recipe.id==recipeId;
    })};
  }
}

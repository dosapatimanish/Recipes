import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe: any; 
  constructor(private activatedRoute:ActivatedRoute,private recipesService:RecipesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId'))
        {
           //redirect 
           return;
        }
        
        let RecipeId=paramMap.get('recipeId');
        if(RecipeId)
        this.loadedRecipe=this.recipesService.getRecipe(RecipeId);
        console.log(RecipeId);
    });
    
  }

}

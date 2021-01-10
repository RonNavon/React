using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DAL;
using System.Data.Entity;

namespace Exercise3_API.Models
{
    public class RecipeModel
    {
        public static List<recipe> GetAllRecipes(DishRecipesDBContext db)
        {
            return db.recipes.ToList();

        }

        public static dynamic GetAllIngredientsById(DishRecipesDBContext db, int id)
        {
            return db.ingredientsInRecipes
                .Include(i => i.Ingredient)
                    .Where(i => i.RecipeID == id)
                        .Select(i => new
                        {
                            i.Ingredient.ID,
                            i.Ingredient.Name,
                            i.Ingredient.Image,
                            i.Ingredient.Calories,
                            i.Order
                        });

        }

    }
}
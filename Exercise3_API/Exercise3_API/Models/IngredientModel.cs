using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DAL;
using System.Data.Entity;

namespace Exercise3_API.Models
{
    public class IngredientModel
    {
        public static List<Ingredient> GetAllIngredients(DishRecipesDBContext db)
        {
            return db.Ingredients.ToList();
        }

    }
}
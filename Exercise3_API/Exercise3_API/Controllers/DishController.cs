using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DAL;
using Exercise3_API.Models;
using DTO;

namespace Exercise3_API.Controllers
{
    public class DishController : ApiController
    {
        DishRecipesDBContext db = new DishRecipesDBContext();
        
        public IHttpActionResult Get()
        {
            try
            {
                return Ok(RecipeModel.GetAllRecipes(db));
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        public IHttpActionResult Get(int id)
        {
            try
            {
                return Ok(RecipeModel.GetAllIngredientsById(db, id));

            }   
            catch (Exception ex)
            {

                return Content(HttpStatusCode.BadRequest, ex); ;
            }
        }

        public IHttpActionResult Post([FromBody] RecipeDTO value)
        {
            try
            {
                recipe newRecipe = new recipe()
                {
                    Name = value.Name,
                    CookingMethod = value.cookingMethod,
                    time= value.cookingTime,
                    image = value.imageURL
                    
                };
                db.recipes.Add(newRecipe);
                db.SaveChanges();
                int RecipeID = newRecipe.ID;
                foreach (var item in value.ingredientsIDs)
                {
                    db.ingredientsInRecipes.Add(new ingredientsInRecipe() { RecipeID = RecipeID, IngredientID = item });
                }
                db.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {

                return Content(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DAL;
using Exercise3_API.Models;

namespace Exercise3_API.Controllers
{
    public class IngredientController : ApiController
    {
        DishRecipesDBContext db = new DishRecipesDBContext();
        
        public IHttpActionResult Get()
        {
            try
            {
                return Ok(IngredientModel.GetAllIngredients(db));
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

       
        public IHttpActionResult Post([FromBody] Ingredient value)
        {
            try
            {
                db.Ingredients.Add(value);
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

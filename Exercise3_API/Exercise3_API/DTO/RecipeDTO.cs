using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DAL;

namespace DTO
{
    public class RecipeDTO
    {
        public string Name { get; set; }

        public string imageURL { get; set; }
        public string cookingMethod { get; set; }
        public int cookingTime { get; set; }

        public List<int> ingredientsIDs { get; set; }
    }
}
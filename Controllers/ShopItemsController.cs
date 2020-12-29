using System;
using Microsoft.AspNetCore.Mvc;

namespace test_task.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ShopItemController : Controller
    {
        public class attr
        {
            string color;
            string format;
            public attr(string color, string format)
            {
                this.color = color;
                this.format = format;
            }
        }

        public class gavno
        {
            int id;
            string name;
            int price;
            attr attr;

            public gavno(int id, string name, int price, attr attr)
            {
                this.id = id;
                this.name = name;
                this.price = price;
                this.attr = attr;
            }
        }

        [HttpPost("UserData")]
        public JsonResult UserData(string data)
        {
            var userData = data;
            Random r = new Random();
            int rInt = r.Next(1000, 100000);
            return Json(rInt);
        }
    }
}
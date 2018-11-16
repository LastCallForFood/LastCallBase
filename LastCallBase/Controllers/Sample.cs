using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace LastCallBase.Controllers
{
    [Route("api/[controller]")]
    public class SampleController : Controller
    {
        public class BaseData
        {
            public int ID { get; set; }
            public string Name { get; set; }
        }

        private static BaseData[] data =
        {
            new BaseData {
                ID = 1,
                Name = "Item 1"

           },
            new BaseData {
                ID = 2,
                Name = "Item 2"
           },
            new BaseData {
                ID = 3,
                Name = "Item 3"
           }
        };

        [HttpGet("[action]")]
        public IEnumerable<BaseData> BaseService()
        {
            return Enumerable.Range(0, data.Length).Select(index => data[index]);
        }

        [HttpPost("[action]")]
        public ServerError PostService()
        {
            string username = Request.Form["username"];
            string password = Request.Form["password"];

            return new ServerError { ErrorCode = 1, ErrorMessage = "Bad credentials", ErrorDescription = "", StatusMessage = "Login completed for user '" + username + "' with password '" + password + "'" };
        }
    }
}

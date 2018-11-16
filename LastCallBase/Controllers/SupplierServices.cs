using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace LastCallBase.Controllers
{
    [Route("api/[controller]")]
    public class SupplierServices : Controller
    {
        public class SupplierData
        {
            public ServerError error;
            public string information;

            public SupplierData()
            {
                error = new ServerError();
            }
        }

        [HttpGet("[action]")]
        public SupplierData GetSupplierData()
        {
            SupplierData data = new SupplierData();
            data.information = "Supplier information";

            return data;
        }
    }
}


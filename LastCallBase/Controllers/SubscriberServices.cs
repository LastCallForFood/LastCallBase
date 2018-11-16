using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using LastCallBase.LastCallDatabase;
using Microsoft.EntityFrameworkCore;

namespace LastCallBase.Controllers
{
    [Route("api/[controller]")]
    public class SubscriberServices : Controller
    {
        public class SubscriberData
        {
            public ServerError error;
            public string information;

            public SubscriberData()
            {
                error = new ServerError();
            }
        }

        [HttpGet("[action]")]
        public SubscriberData GetSubscriberData()
        {
            SubscriberData data = new SubscriberData();
            data.information = "Subscriber information";

            return data;
        }

        [HttpPost("[action]")]
        public ServerError RegisterSubscriber()
        {
            string username = Request.Form["username"];
            string password = Request.Form["password"];


            if (CheckUserRegistered(username))
                return new ServerError { ErrorCode = 1, ErrorMessage = "Email address is already in use", ErrorDescription = "", StatusMessage = "" };

            (bool result, string msg) = CreateNewSubscriber(username, password);
            if (!result)
                return new ServerError { ErrorCode = 2, ErrorMessage = "Failed to add subscriber", ErrorDescription = "Exception in CreateNewSuscriber" + msg, StatusMessage = "" };

            return new ServerError { ErrorCode = 0, ErrorMessage = "OK", ErrorDescription = msg, StatusMessage = "" };
        }

        // https://dev.mysql.com/doc/connector-net/en/connector-net-entityframework-core-scaffold-example.html
        private bool CheckUserRegistered(string email)
        {
            lastcallContext c = new LastCallDatabase.lastcallContext();
            Subscribers subscriber = c.Subscribers.Where((x) => x.Email == email).FirstOrDefault();

            return (subscriber != null);
        }

        private (bool, string) CreateNewSubscriber(string email, string password)
        {
            try
            {
                lastcallContext c = new LastCallDatabase.lastcallContext();
                Subscribers subscriber = new Subscribers() { Email = email };
                c.Add(subscriber);
                c.SaveChanges();

                return (true, "Success");
            }
            catch (Exception X)
            {
                return (false, X.Message);
            }
        }
    }
}


using Microsoft.AspNetCore.Mvc;

namespace Sera_job_portal_api.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

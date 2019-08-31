using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Projeto_1.Models;

namespace Projeto_1.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public IActionResult Index2()
        {
            ViewData["Message"] = "yeah thi is muito great.";

            return View();
        }

        public IActionResult Album()
        {
            ViewData["Message"] = "yeah thi is muito great.";

            return View();
        }

        public IActionResult Cadastro()
        {
            ViewData["Message"] = "yeah thi is muito great.";

            return View();
        }

        public IActionResult Dicas()
        {
            ViewData["Message"] = "yeah thi is muito great.";

            return View();
        }

        public IActionResult Metro()
        {
            ViewData["Message"] = "yeah thi is muito great.";

            return View();
        }

        public IActionResult Pagamento()
        {
            ViewData["Message"] = "yeah thi is muito great.";

            return View();
        }

        public IActionResult Pontos()
        {
            ViewData["Message"] = "yeah thi is muito great.";

            return View();
        }

        public IActionResult Restaurante()
        {
            ViewData["Message"] = "yeah thi is muito great.";

            return View();
        }
         public IActionResult Consulta()
        {
            ViewData["Message"] = "yeah thi is muito great.";

            return View();
        }

         public IActionResult Leitores()
        {
            ViewData["Message"] = "yeah thi is muito great.";

            return View();
        }
    }
}

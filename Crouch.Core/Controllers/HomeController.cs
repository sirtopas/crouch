using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Crouch.Core.Content;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Crouch.Core.Controllers
{
	[Route("api/[controller]")]
	public class HomeController : Controller
	{
		private readonly CrouchContext _context;

		public HomeController(CrouchContext context)
		{
			_context = context;
		}

		public string Index()
		{
			return _context.Customer.First().FirstName;
		}
	}
}
using System.Linq;
using Crouch.Core.Content;
using Microsoft.AspNetCore.Mvc;

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

		[HttpGet]
		public string Index()
		{
			return _context.Customer.First().FirstName;
		}
	}
}
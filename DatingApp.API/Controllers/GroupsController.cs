using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DatingApp.API.Controllers
{
	[AllowAnonymous]
	[Route("api/[controller]")]
	[ApiController]
	public class GroupsController : Controller
	{
		private readonly DataContext _context;
		public GroupsController(DataContext context)
		{
			_context = context;
		}

		//api Get groups
		[HttpGet]
		public async Task<IActionResult> GetGroups()
		{
			var groups = await _context.Groups.ToListAsync();
			return Ok(groups);
		}

		// POST api/values
		[HttpPost]
		public void Post([FromBody] string group)
		{
		}

	}
}

using API.Extensions;
using Application.DTOs;
using Application.Interfaces.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/stores")]
    public class StoreController(IStoreService storeService) : ControllerBase
    {
        [Authorize]
        [HttpPost]
        public async Task<IActionResult> RegisterAsync([FromBody] StoreRequest request)
        {
            var userId = User.GetUserId();
            var result = await storeService.CreateAsync(userId, request);
            return CreatedAtRoute("GetStoreById", new { Id = result.Id }, result);
        }

        [Authorize]
        [HttpGet("{id:guid}", Name = "GetStoreById")]
        public async Task<IActionResult> GetByIdAsync([FromRoute] Guid storeId)
        {
            return Ok();
        }
    }
}

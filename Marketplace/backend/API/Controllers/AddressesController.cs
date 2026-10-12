using API.Extensions;
using Application.DTOs;
using Application.Interfaces.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/addresses")]
    public class AddressesController(IAddressService addressService) : ControllerBase
    {
        [Authorize]
        [HttpPost]
        public async Task<IActionResult> RegisterAsync([FromBody] AddressRequest request)
        {
            var userId = User.GetUserId();
            var result = await addressService.CreateAsync(userId, request);
            return CreatedAtRoute("GetAddressById", new { id = result.Id }, result);
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var userId = User.GetUserId();
            var result = await addressService.GetAllAsync(userId);

            return Ok(result);
        }

        [Authorize]
        [HttpGet("{id:guid}", Name = "GetAddressById")]
        public async Task<IActionResult> GetByIdAsync([FromRoute] Guid id)
        {
            var userId = User.GetUserId();
            var result = await addressService.GetByIdAsync(userId, id);
            return Ok(result);
        }

        [Authorize]
        [HttpPut("{id:guid}")]
        public async Task<IActionResult> UpdateAsync([FromRoute] Guid id, [FromBody] AddressRequest request)
        {
            var userId = User.GetUserId();
            await addressService.UpdateAsync(userId, id, request);

            return NoContent();
        }
    }
}

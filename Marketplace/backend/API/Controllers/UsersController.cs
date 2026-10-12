using API.Extensions;
using Application.DTOs;
using Application.Interfaces.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UsersController(IUserService userService) : ControllerBase
    {
        [Authorize]
        [HttpGet("me")]
        public async Task<IActionResult> GetProfile()
        {
            var userId = User.GetUserId();
            var result = await userService.GetProfileAsync(userId);
            return Ok(result);

        }

        [Authorize]
        [HttpPut("me")]
        public async Task<IActionResult> UpdateProfile(UpdateProfileRequest request)
        {
            var userId = User.GetUserId();
            var result = await userService.UpdateProfileAsync(userId, request);
            return Ok(result);
        }
    }
}

using Application.DTOs;
using Application.Interfaces.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace API.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController(IAuthService authService) : ControllerBase
    {
        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<IActionResult> RegisterAsync([FromBody] UserRequest request)
        {
            var response = await authService.RegisterAsync(request);
            return StatusCode(201, response);
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> LoginAsync([FromBody] LoginRequest request)
        {
            var response = await authService.LoginAsync(request);

            Response.Cookies.Append("access_token", response.Token, new CookieOptions
            {
                HttpOnly = true,
                Secure = true,
                SameSite = SameSiteMode.None,
                Expires = DateTimeOffset.UtcNow.AddMinutes(60)
            });

            return Ok(response.User);
        }

        [Authorize]
        [HttpGet("me")]
        public IActionResult Me()
        {
            var id = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var name = User.FindFirst("name")?.Value;
            var email = User.FindFirst(ClaimTypes.Email)?.Value;

            return Ok(new { id, name, email });
        }
    }
}

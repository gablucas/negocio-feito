using Application.DTOs;

namespace Application.Interfaces.Services
{
    public interface IAuthService
    {
        Task<UserResponse> RegisterAsync(UserRequest request);
        Task<LoginResult> LoginAsync(LoginRequest request);
    }
}

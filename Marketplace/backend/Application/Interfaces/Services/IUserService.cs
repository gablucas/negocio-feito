using Application.DTOs;

namespace Application.Interfaces.Services
{
    public interface IUserService
    {
        Task<ProfileResponse> UpdateProfileAsync(Guid userId, UpdateProfileRequest request);
        Task<ProfileResponse> GetProfileAsync(Guid id);
    }
}

using Application.DTOs;
using Application.Interfaces.Repositories;
using Application.Interfaces.Services;
using Domain.Extensions;

namespace Application.Services
{
    public class UserService(IUserRepository users) : IUserService
    {
        public async Task<ProfileResponse> UpdateProfileAsync(Guid id, UpdateProfileRequest request)
        {
            var user = await users.GetByIdAsync(id) ?? throw new NotFoundException("Usuário não encontrado");

            user.UpdateProfile(request.Name);

            var updated = await users.UpdateAsync(user);

            if (!updated)
                throw new NotFoundException("Usuário não encontrado");

            return new ProfileResponse(user.Name, user.Email);
        }

        public async Task<ProfileResponse> GetProfileAsync(Guid id)
        {
            var user = await users.GetByIdAsync(id) ?? throw new NotFoundException("Usuário não encontrado");

            return new ProfileResponse(user.Name, user.Email);
        }
    }
}

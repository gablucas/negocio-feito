using Domain.Entities;

namespace Application.Interfaces.Repositories
{
    public interface IUserRepository
    {
        Task AddAsync(User user);
        Task<bool> UpdateAsync(User user);

        Task<bool> ExistsByEmailAsync(string email);
        Task<User?> GetByEmailAsync(string email);
        Task<User?> GetByIdAsync(Guid id);

    }
}

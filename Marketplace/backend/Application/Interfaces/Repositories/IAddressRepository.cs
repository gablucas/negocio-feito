using Domain.Entities;

namespace Application.Interfaces.Repositories
{
    public interface IAddressRepository
    {
        Task AddAsync(Address address);
        Task<IEnumerable<Address>> GetAllAsync(Guid userId);
        Task<Address?> GetByIdAsync(Guid userId, Guid addressId);
        Task<bool> UpdateAsync(Address address);
    }
}

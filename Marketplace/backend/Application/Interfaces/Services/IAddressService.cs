using Application.DTOs;

namespace Application.Interfaces.Services
{
    public interface IAddressService
    {
        Task<AddressResponse> CreateAsync(Guid userId, AddressRequest request);
        Task UpdateAsync(Guid userId, Guid addressId, AddressRequest request);
        Task<IEnumerable<AddressResponse>> GetAllAsync(Guid userId);
        Task<AddressResponse> GetByIdAsync(Guid userId, Guid addressId);
    }
}

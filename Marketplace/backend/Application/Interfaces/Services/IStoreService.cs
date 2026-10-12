using Application.DTOs;

namespace Application.Interfaces.Services
{
    public interface IStoreService
    {
        Task<StoreResponse> CreateAsync(Guid userId ,StoreRequest request);
    }
}

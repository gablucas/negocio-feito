using Application.DTOs;
using Application.Interfaces.Repositories;
using Application.Interfaces.Services;
using Domain.Entities;

namespace Application.Services
{
    public class StoreService(IStoreRepository stores) : IStoreService
    {
        public async Task<StoreResponse> CreateAsync(Guid userId, StoreRequest request)
        {
            var store = Store.Create(userId, request.Name);
            await stores.AddAsync(store);

            return StoreResponse.From(store);
        }
    }
}

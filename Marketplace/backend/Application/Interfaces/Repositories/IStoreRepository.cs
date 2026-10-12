using Domain.Entities;

namespace Application.Interfaces.Repositories
{
    public interface IStoreRepository
    {
        Task AddAsync(Store store);
    }
}

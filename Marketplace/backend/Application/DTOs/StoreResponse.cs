using Domain.Entities;

namespace Application.DTOs
{
    public record StoreResponse(Guid Id, string Name)
    {
        public static StoreResponse From(Store a) => new(a.Id, a.Name);
    }
}

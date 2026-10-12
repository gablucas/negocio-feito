using Domain.Entities;

namespace Application.DTOs
{
    public record AddressResponse(Guid Id, string Label, string PostalCode, string Street, string Number, string Neighborhood, string City, string State, string? Complement)
    {
        public static AddressResponse From(Address a) => new(a.Id, a.Label, a.PostalCode, a.Street, a.Number, a.Neighborhood, a.City, a.State, a.Complement);
    }
}

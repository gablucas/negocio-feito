namespace Application.DTOs
{
    public sealed record AddressRequest(string Label, string PostalCode, string Street, string Number, string Neighborhood, string City, string State, string? Complement);
}

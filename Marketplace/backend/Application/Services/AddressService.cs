using Application.DTOs;
using Application.Interfaces.Repositories;
using Application.Interfaces.Services;
using Domain.Entities;
using Domain.Extensions;
namespace Application.Services
{
    public class AddressService(IAddressRepository addresses) : IAddressService
    {
        public async Task<AddressResponse> CreateAsync(Guid userId, AddressRequest request)
        {
            var address = Address.Create(userId, request.Label, request.PostalCode, request.Street, request.Number, request.Neighborhood, request.City, request.State, request.Complement);

            await addresses.AddAsync(address);

            return AddressResponse.From(address);
        }

        public async Task UpdateAsync(Guid userId, Guid addressId, AddressRequest request)
        {
            var address = Address.Update(addressId, userId, request.Label, request.PostalCode, request.Street, request.Number, request.Neighborhood, request.City, request.State, request.Complement);
            var updated = await addresses.UpdateAsync(address);

            if (!updated)
                throw new NotFoundException("Endereço não encontrado");
        }

        public async Task<IEnumerable<AddressResponse>> GetAllAsync(Guid userId)
        {
            var userAddresses = await addresses.GetAllAsync(userId);

            return userAddresses.Select(x => AddressResponse.From(x));
        }

        public async Task<AddressResponse> GetByIdAsync(Guid userId, Guid addressId)
        {
            var address = await addresses.GetByIdAsync(userId, addressId) ?? throw new NotFoundException("Endereço não encontrado");
            return AddressResponse.From(address);
        }
    }
}

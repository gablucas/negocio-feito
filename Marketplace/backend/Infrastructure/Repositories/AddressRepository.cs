using Application.Interfaces.Repositories;
using Dapper;
using Domain.Entities;
using Infrastructure.Data;

namespace Infrastructure.Repositories
{
    public class AddressRepository : IAddressRepository
    {
        private readonly IDbConnectionFactory _connection;

        public AddressRepository(IDbConnectionFactory connection)
        {
            _connection = connection;
        }

        public async Task AddAsync(Address address)
        {
            using var connection = _connection.CreateConnection();

            const string sql = @"
                INSERT INTO user_addresses 
                    (id, label, postal_code, street, number, neighborhood, city, state, complement, user_id)
                VALUES
                    (@id, @label, @postalCode, @street, @number, @neighborhood, @city, @state, @complement, @userId)";

            await connection.ExecuteAsync(sql, address);
        }

        public async Task<IEnumerable<Address>> GetAllAsync(Guid userId)
        {
            using var connection = _connection.CreateConnection();

            const string sql = "SELECT * FROM user_addresses WHERE user_id = @userId";

            return await connection.QueryAsync<Address>(sql, new { UserId = userId.ToString() });
        }

        public async Task<Address?> GetByIdAsync(Guid userId, Guid addressId)
        {
            using var connection = _connection.CreateConnection();

            const string sql = @"
                SELECT * FROM user_addresses
                WHERE id = @id AND user_id = @userId";

            return await connection.QuerySingleAsync<Address>(sql, new { id = addressId.ToString(), userId = userId.ToString() });
        }

        public async Task<bool> UpdateAsync(Address address)
        {
            using var connection = _connection.CreateConnection();

            const string sql = @"
                UPDATE user_addresses
                SET 
                    label = @label,
                    postal_code = @postalCode,
                    street = @street,
                    number = @number,
                    neighborhood = @neighborhood,
                    city = @city,
                    state = @state,
                    complement = @complement
                WHERE id = @id AND user_id = @userId;
            ";

            var rows = await connection.ExecuteAsync(sql, address);
            return rows > 0;
        }
    }
}

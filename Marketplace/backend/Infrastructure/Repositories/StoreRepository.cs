using Application.Interfaces.Repositories;
using Dapper;
using Domain.Entities;
using Infrastructure.Data;

namespace Infrastructure.Repositories
{
    public class StoreRepository : IStoreRepository
    {
        private readonly IDbConnectionFactory _connection;

        public StoreRepository(IDbConnectionFactory connection)
        {
            _connection = connection;
        }

        public async Task AddAsync(Store store)
        {
            using var connection = _connection.CreateConnection();

            var sql = @"
                INSERT INTO user_stores
                    (id, user_id, name, created_at, updated_at)
                VALUES
                    (@id, @userId, @name, @createdAt, @updatedAt)";

            await connection.ExecuteAsync(sql, store);
        }
    }
}

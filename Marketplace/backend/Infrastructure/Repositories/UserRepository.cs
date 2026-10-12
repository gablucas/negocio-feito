using Application.Interfaces.Repositories;
using Dapper;
using Domain.Entities;
using Infrastructure.Data;

namespace Infrastructure.Repositories
{
    public class UserRepository(IDbConnectionFactory connection) : IUserRepository
    {
        private readonly IDbConnectionFactory _connection = connection;

        public async Task AddAsync(User user)
        {
            using var connection = _connection.CreateConnection();

            var sql = @"
                INSERT INTO users (id, name, email, password_hash, created_at)
                VALUES (@Id, @Name, @Email, @PasswordHash, @CreatedAt)";

            await connection.ExecuteAsync(sql, user);
        }

        public async Task<bool> ExistsByEmailAsync(string email)
        {
            using var connection = _connection.CreateConnection();

            const string sql = "SELECT EXISTS(SELECT 1 FROM users WHERE email = @Email)";

            return await connection.ExecuteScalarAsync<bool>(sql, new { Email = email.Trim().ToLowerInvariant() });
        }

        public async Task<User?> GetByEmailAsync(string email)
        {
            using var connection = _connection.CreateConnection();

            const string sql = "SELECT * FROM users WHERE email = @Email";

            return await connection.QuerySingleAsync<User>(sql, new { Email = email });
        }

        public async Task<User?> GetByIdAsync(Guid Id)
        {
            using var connection = _connection.CreateConnection();

            const string sql = "SELECT * FROM users WHERE id = @Id";

            return await connection.QuerySingleAsync<User>(sql, new { Id = Id.ToString() });
        }

        public async Task<bool> UpdateAsync(User user)
        {
            using var connection = _connection.CreateConnection();

            const string sql = "UPDATE users SET name = @Name WHERE id = @Id";

            var rows = await connection.ExecuteAsync(sql, user);

            return rows > 0;
        }
    }
}

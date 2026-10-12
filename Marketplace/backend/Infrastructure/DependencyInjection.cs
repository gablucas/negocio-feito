using Dapper;
using Infrastructure.Data;
using Infrastructure.Security;
using Infrastructure.Repositories;
using Application.Interfaces.Services;
using Infrastructure.Data.TypeHandlers;
using Microsoft.Extensions.Configuration;
using Application.Interfaces.Repositories;
using Microsoft.Extensions.DependencyInjection;


namespace Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString("DefaultConnection");

            services.Configure<JwtSettings>(configuration.GetSection("Jwt"));

            services.AddSingleton<IDbConnectionFactory>(_ => new MySqlConnectionFactory(connectionString));
            services.AddScoped<ITokenGenerator, JwtTokenGenerator>();

            // Repositories
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IAddressRepository, AddressRepository>();
            services.AddScoped<IStoreRepository, StoreRepository>();

            SqlMapper.AddTypeHandler(new GuidTypeHandler());
            DefaultTypeMap.MatchNamesWithUnderscores = true;

            return services;
        }
    }
}

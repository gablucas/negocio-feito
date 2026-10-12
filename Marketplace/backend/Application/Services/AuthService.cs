using Application.DTOs;
using Application.Interfaces.Repositories;
using Application.Interfaces.Services;
using Domain.Entities;
using Domain.Exceptions;
using Microsoft.AspNetCore.Identity;


namespace Application.Services
{
    public class AuthService(IUserRepository users, IPasswordHasher<User> hasher, ITokenGenerator tokenGenerator) : IAuthService
    {
        public async Task<UserResponse> RegisterAsync(UserRequest request)
        {
            if (await users.ExistsByEmailAsync(request.Email))
                throw new ConflictException("Email já cadastrado");

            var user = User.Create(request.Name, request.Email);

            var passwordHash = hasher.HashPassword(user, request.Password);

            user.SetHashPassword(passwordHash);

            await users.AddAsync(user);

            return new UserResponse(user.Id, user.Name, user.Email);
        }

        public async Task<LoginResult> LoginAsync(LoginRequest request)
        {
            var user = await users.GetByEmailAsync(request.Email);

            if (user is null || hasher.VerifyHashedPassword(user, user.PasswordHash, request.Password) == PasswordVerificationResult.Failed)
                throw new UnauthorizedException("Email ou senha inválidos");

            var token = tokenGenerator.Generate(user);

            return new LoginResult(token, new UserResponse(user.Id, user.Name, user.Email));
        }
    }
}

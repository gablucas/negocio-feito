using Domain.Entities;

namespace Application.Interfaces.Services
{
    public interface ITokenGenerator
    {
        string Generate(User user);
    }
}

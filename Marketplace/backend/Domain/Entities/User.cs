using Domain.Exceptions;

namespace Domain.Entities
{
    public class User : BaseEntity
    {
        public string Name { get; private set; }
        public string Email { get; private set; }
        public string PasswordHash { get; private set; }

        private User() { }

        public static User Create(string name, string email)
        {
            if (string.IsNullOrWhiteSpace(name) || name.Length < 2)
                throw new DomainException("Nome inválido.");

            if (!email.Contains("@"))
                throw new DomainException("Email inválido");

            DateTime now = DateTime.UtcNow;

            return new User
            {
                Id = Guid.NewGuid(),
                Name = name.Trim(),
                Email = email.Trim().ToLowerInvariant(),
                CreatedAt = now,
                UpdatedAt= now
            };
        }

        public void UpdateProfile(string newName)
        {
            if (string.IsNullOrWhiteSpace(newName))
                throw new DomainException("Nome inválido");

            Name = newName.Trim();
        }

        public void SetHashPassword(string hashedPassword)
        {
            PasswordHash = hashedPassword;
        }
    }
}

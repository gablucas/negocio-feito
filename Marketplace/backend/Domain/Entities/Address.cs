namespace Domain.Entities
{
    public class Address : BaseEntity
    {
        public Guid UserId { get; private set; }
        public string Label { get; private set; }
        public string PostalCode { get; private set; }
        public string Street { get; private set; }
        public string Number { get; private set; }
        public string? Complement { get; private set; }
        public string Neighborhood { get; private set; }
        public string City { get; private set; }
        public string State { get; private set; }

        private Address() { }

        public static Address Create(Guid userId, string label, string postalCode, string street, string number, string neighborhood, string city, string state, string? complement = null)
        {
            DateTime now = DateTime.UtcNow;

            return new Address()
            {
                Id = Guid.NewGuid(),
                UserId = userId,
                Label = label,
                PostalCode = postalCode,
                Street = street,
                Number = number,
                Complement = complement,
                Neighborhood = neighborhood,
                City = city,
                State = state,
                CreatedAt = now,
                UpdatedAt = now
            };
        }

        public static Address Update(Guid id, Guid userId, string label, string postalCode, string street, string number, string neighborhood, string city, string state, string? complement = null)
        {
            return new Address()
            {
                Id = id,
                UserId = userId,
                Label = label,
                PostalCode = postalCode,
                Street = street,
                Number = number,
                Complement = complement,
                Neighborhood = neighborhood,
                City = city,
                State = state,
                UpdatedAt = DateTime.UtcNow,
            };
        }
    }
}

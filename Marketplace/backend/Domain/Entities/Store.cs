namespace Domain.Entities
{
    public class Store : BaseEntity
    {
        public string Name { get; private set; }
        public Guid UserId { get; private set; }

        public Store() {}

        public static Store Create(Guid userId, string name)
        {
            DateTime now = DateTime.UtcNow;

            return new Store()
            {
                Id = Guid.NewGuid(),
                Name = name,
                UserId = userId,
                CreatedAt = now,
                UpdatedAt = now,

            };
        }
    }
}

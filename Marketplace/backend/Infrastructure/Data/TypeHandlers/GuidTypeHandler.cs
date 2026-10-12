using Dapper;
using System.Data;

namespace Infrastructure.Data.TypeHandlers
{
    public class GuidTypeHandler : SqlMapper.TypeHandler<Guid>
    {
        public override Guid Parse(object value) => Guid.Parse(value.ToString()!);

        public override void SetValue(IDbDataParameter parameter, Guid value)
        {
            parameter.DbType = DbType.String;
            parameter.Value = value.ToString();
        }
    }
}

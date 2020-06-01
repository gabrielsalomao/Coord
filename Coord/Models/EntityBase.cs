using System;
using System.ComponentModel;

namespace Coord.Models
{
    public class EntityBase
    {
        [DisplayName("Data do Cadastro")]
        public DateTime CreatedDate { get; set; }

        [DisplayName("Última atualização")]
        public DateTime UpdatedDate { get; set; }
    }
}

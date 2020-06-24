using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Coord.Models
{
    public class Coordenador : EntityBase
    {
        [Key]
        public int CoordenadorId { get; set; }

        [Column(TypeName = "varchar(100)")]
        [Required(ErrorMessage = "Campo obrigatório")]
        public string Nome { get; set; }

        [Column(TypeName = "varchar(200)")]
        public string ZonaEleitoral { get; set; }

        public bool Veiculo { get; set; }

        [Column(TypeName = "varchar(150)")]
        [DisplayName("Redes Sociais")]
        public string RedeSocial { get; set; }

        [Column(TypeName = "varchar(10)")]
        public string Placa { get; set; }

        [Column(TypeName = "varchar(20)")]
        public string Celular { get; set; }

        [Column(TypeName = "varchar(20)")]
        public string Telefone { get; set; }

        [Column(TypeName = "varchar(100)")]
        [DisplayName("E-Mail")]
        public string Email { get; set; }
    }
}

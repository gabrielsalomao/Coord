using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Coord.Models
{
    public class Coordenado : EntityBase
    {
        [Key]
        public int CoordenadoId { get; set; }

        [Column(TypeName = "varchar(100)")]
        [Required(ErrorMessage = "Campo obrigatório")]
        public string Nome { get; set; }

        public bool Veiculo { get; set; }

        [Column(TypeName = "varchar(200)")]
        public string ZonaEleitoral { get; set; }

        [Column(TypeName = "varchar(150)")]
        [DisplayName("Redes Sociais")]
        public string RedeSocial { get; set; }

        [Column(TypeName = "varchar(10)")]
        public string Placa { get; set; }

        [Column(TypeName = "varchar(20)")]
        public string Celular { get; set; }

        [Column(TypeName = "varchar(20)")]
        public string Telefone { get; set; }

        [Column(TypeName = "varchar(50)")]
        [Required(ErrorMessage = "Campo obrigatório")]
        public string Logradouro { get; set; }

        [Column(TypeName = "varchar(50)")]
        [Required(ErrorMessage = "Campo obrigatório")]
        public string Bairro { get; set; }

        [Column(TypeName = "varchar(10)")]
        [Required(ErrorMessage = "Campo obrigatório")]
        public string Cep { get; set; }

        [Column(TypeName = "varchar(10)")]
        [MaxLength(10, ErrorMessage = "O campo não pode ser acima de {0} caracteres")]
        [DisplayName("Número")]
        public string Numero { get; set; }

        [ForeignKey("CoordenadorId")]
        [DisplayName("Coordenador")]
        public int CoordenadorId { get; set; }

        [Column(TypeName = "varchar(100)")]
        [DisplayName("E-Mail")]
        public string Email { get; set; }
        public Coordenador Coordenador { get; set; }

        public string ConstruirEndereco(Coordenado coordenado)
        {
            var endereco = (string.IsNullOrEmpty(coordenado.Logradouro) ? "" : $"{coordenado.Logradouro }, ") +
               (string.IsNullOrEmpty(coordenado.Numero) ? "" : $"{coordenado.Numero }") +
               (string.IsNullOrEmpty(coordenado.Bairro) ? "" : $" - {coordenado.Bairro }") +
               (string.IsNullOrEmpty(coordenado.Cep) ? "" : $" - {coordenado.Cep }");

            return endereco;
        }

    }
}

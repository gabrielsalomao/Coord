using System.ComponentModel.DataAnnotations.Schema;

namespace Coord.Models
{
    public class Coordenado
    {
        public int CoordenadoId { get; set; }

        public string Nome { get; set; }

        public bool Veiculo { get; set; }

        public string RedeSocial { get; set; }

        public string Placa { get; set; }

        public string Celular { get; set; }

        public string Telefone { get; set; }

        [ForeignKey("CoordenadorId")]
        public int CoordenadorId { get; set; }

        public Coordenador Coordenador { get; set; }


    }
}

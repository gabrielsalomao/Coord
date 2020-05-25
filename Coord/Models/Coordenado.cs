using System.ComponentModel.DataAnnotations.Schema;

namespace Coord.Models
{
    public class Coordenado
    {
        public int CoordenadoId { get; set; }
        public string Nome { get; set; }

        [ForeignKey("CoordenadorId")]
        public int CoordenadorId { get; set; }
        public Coordenador Coordenador { get; set; }
    }
}

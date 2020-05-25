using Coord.Models;
using Microsoft.EntityFrameworkCore;

public class CoordContext : DbContext
{
    public CoordContext(DbContextOptions<CoordContext> options)
        : base(options)
    {
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Filename=CoordContext.db");
    }

    public DbSet<Coordenador> Coordenador { get; set; }

    public DbSet<Coordenado> Coordenado { get; set; }
}

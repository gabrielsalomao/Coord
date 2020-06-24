using Coord.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

public class CoordContext : DbContext
{
    public CoordContext(DbContextOptions<CoordContext> options)
        : base(options)
    {
    }

    //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    //{
    //    optionsBuilder.UseSqlite("Filename=CoordContext.db");
    //}

    public DbSet<Coordenador> Coordenador { get; set; }

    public DbSet<Coordenado> Coordenado { get; set; }

    public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default(CancellationToken))
    {
        var AddedEntities = ChangeTracker.Entries().Where(E => E.State == EntityState.Added).ToList();

        AddedEntities.ForEach(E =>
        {
            E.Property("CreatedDate").CurrentValue = DateTime.Now;
            E.Property("UpdatedDate").CurrentValue = DateTime.Now;
            if (E.Property("Placa").CurrentValue != null)
                E.Property("Placa").CurrentValue = E.Property("Placa").CurrentValue.ToString().ToUpper();
        });

        var EditedEntities = ChangeTracker.Entries().Where(E => E.State == EntityState.Modified).ToList();

        EditedEntities.ForEach(E =>
        {
            E.Property("UpdatedDate").CurrentValue = DateTime.Now;

            if (E.Property("Placa").CurrentValue != null)
                E.Property("Placa").CurrentValue = E.Property("Placa").CurrentValue.ToString().ToUpper();
        });

        return base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
    }
}

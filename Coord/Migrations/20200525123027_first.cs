using Microsoft.EntityFrameworkCore.Migrations;

namespace Coord.Migrations
{
    public partial class first : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Coordenador",
                columns: table => new
                {
                    CoordenadorId = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Coordenador", x => x.CoordenadorId);
                });

            migrationBuilder.CreateTable(
                name: "Coordenado",
                columns: table => new
                {
                    CoordenadoId = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome = table.Column<string>(nullable: true),
                    CoordenadorId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Coordenado", x => x.CoordenadoId);
                    table.ForeignKey(
                        name: "FK_Coordenado_Coordenador_CoordenadorId",
                        column: x => x.CoordenadorId,
                        principalTable: "Coordenador",
                        principalColumn: "CoordenadorId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Coordenado_CoordenadorId",
                table: "Coordenado",
                column: "CoordenadorId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Coordenado");

            migrationBuilder.DropTable(
                name: "Coordenador");
        }
    }
}

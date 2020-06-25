using System;
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
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    UpdatedDate = table.Column<DateTime>(nullable: false),
                    Nome = table.Column<string>(type: "varchar(100)", nullable: false),
                    ZonaEleitoral = table.Column<string>(type: "varchar(200)", nullable: true),
                    Veiculo = table.Column<bool>(nullable: false),
                    RedeSocial = table.Column<string>(type: "varchar(150)", nullable: true),
                    Placa = table.Column<string>(type: "varchar(10)", nullable: true),
                    Celular = table.Column<string>(type: "varchar(20)", nullable: true),
                    Telefone = table.Column<string>(type: "varchar(20)", nullable: true)
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
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    UpdatedDate = table.Column<DateTime>(nullable: false),
                    Nome = table.Column<string>(type: "varchar(100)", nullable: false),
                    Veiculo = table.Column<bool>(nullable: false),
                    ZonaEleitoral = table.Column<string>(type: "varchar(200)", nullable: true),
                    RedeSocial = table.Column<string>(type: "varchar(150)", nullable: true),
                    Placa = table.Column<string>(type: "varchar(10)", nullable: true),
                    Celular = table.Column<string>(type: "varchar(20)", nullable: true),
                    Telefone = table.Column<string>(type: "varchar(20)", nullable: true),
                    Logradouro = table.Column<string>(type: "varchar(50)", nullable: false),
                    Bairro = table.Column<string>(type: "varchar(50)", nullable: false),
                    Cep = table.Column<string>(type: "varchar(10)", nullable: false),
                    Numero = table.Column<string>(type: "varchar(10)", maxLength: 10, nullable: true),
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

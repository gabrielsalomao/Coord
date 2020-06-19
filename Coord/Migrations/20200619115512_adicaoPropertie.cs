using Microsoft.EntityFrameworkCore.Migrations;

namespace Coord.Migrations
{
    public partial class adicaoPropertie : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ZonaEleitoral",
                table: "Coordenador",
                type: "varchar(200)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ZonaEleitoral",
                table: "Coordenado",
                type: "varchar(200)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ZonaEleitoral",
                table: "Coordenador");

            migrationBuilder.DropColumn(
                name: "ZonaEleitoral",
                table: "Coordenado");
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

namespace Coord.Migrations
{
    public partial class Qualquernome : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Celular",
                table: "Coordenador",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Placa",
                table: "Coordenador",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RedeSocial",
                table: "Coordenador",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Telefone",
                table: "Coordenador",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "Veiculo",
                table: "Coordenador",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Celular",
                table: "Coordenado",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Placa",
                table: "Coordenado",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RedeSocial",
                table: "Coordenado",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Telefone",
                table: "Coordenado",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "Veiculo",
                table: "Coordenado",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Celular",
                table: "Coordenador");

            migrationBuilder.DropColumn(
                name: "Placa",
                table: "Coordenador");

            migrationBuilder.DropColumn(
                name: "RedeSocial",
                table: "Coordenador");

            migrationBuilder.DropColumn(
                name: "Telefone",
                table: "Coordenador");

            migrationBuilder.DropColumn(
                name: "Veiculo",
                table: "Coordenador");

            migrationBuilder.DropColumn(
                name: "Celular",
                table: "Coordenado");

            migrationBuilder.DropColumn(
                name: "Placa",
                table: "Coordenado");

            migrationBuilder.DropColumn(
                name: "RedeSocial",
                table: "Coordenado");

            migrationBuilder.DropColumn(
                name: "Telefone",
                table: "Coordenado");

            migrationBuilder.DropColumn(
                name: "Veiculo",
                table: "Coordenado");
        }
    }
}

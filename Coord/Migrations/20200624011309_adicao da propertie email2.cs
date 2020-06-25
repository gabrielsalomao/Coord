﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace Coord.Migrations
{
    public partial class adicaodapropertieemail2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Coordenado",
                type: "varchar(100)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "Coordenado");
        }
    }
}

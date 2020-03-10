using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CSX_Server.Migrations
{
    public partial class start_project : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "general");

            migrationBuilder.EnsureSchema(
                name: "business");

            migrationBuilder.CreateSequence(
                name: "order_companies",
                schema: "business");

            migrationBuilder.CreateSequence(
                name: "order_company_users",
                schema: "business");

            migrationBuilder.CreateSequence(
                name: "order_departments",
                schema: "business");

            migrationBuilder.CreateSequence(
                name: "order_page_views",
                schema: "business");

            migrationBuilder.CreateSequence(
                name: "order_surveys",
                schema: "business");

            migrationBuilder.CreateSequence(
                name: "order_actions",
                schema: "general");

            migrationBuilder.CreateSequence(
                name: "order_roles",
                schema: "general");

            migrationBuilder.CreateSequence(
                name: "order_token_logs",
                schema: "general");

            migrationBuilder.CreateSequence(
                name: "order_tokens",
                schema: "general");

            migrationBuilder.CreateSequence(
                name: "order_users",
                schema: "general");

            migrationBuilder.CreateTable(
                name: "roles",
                schema: "general",
                columns: table => new
                {
                    id_role = table.Column<decimal>(nullable: false, defaultValueSql: "nextval('general.order_roles'::regclass)"),
                    title = table.Column<string>(nullable: false),
                    description = table.Column<string>(nullable: false),
                    administrator = table.Column<bool>(nullable: false),
                    permissions = table.Column<string>(type: "json", nullable: true),
                    createdat = table.Column<DateTime>(nullable: false),
                    updatedat = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_roles", x => x.id_role);
                });

            migrationBuilder.CreateTable(
                name: "company_users",
                schema: "business",
                columns: table => new
                {
                    id_company_user = table.Column<decimal>(nullable: false, defaultValueSql: "nextval('business.order_company_users'::regclass)"),
                    fk_company = table.Column<decimal>(nullable: false),
                    fk_user = table.Column<decimal>(nullable: false),
                    fk_role = table.Column<decimal>(nullable: false),
                    createdat = table.Column<DateTime>(nullable: false),
                    updatedat = table.Column<DateTime>(nullable: true),
                    deletedat = table.Column<DateTime>(nullable: true),
                    fk_user_create = table.Column<decimal>(nullable: false),
                    fk_user_update = table.Column<decimal>(nullable: true),
                    fk_user_delete = table.Column<decimal>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_company_users", x => x.id_company_user);
                    table.ForeignKey(
                        name: "FK_company_users_roles_fk_role",
                        column: x => x.fk_role,
                        principalSchema: "general",
                        principalTable: "roles",
                        principalColumn: "id_role",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "department",
                schema: "business",
                columns: table => new
                {
                    id_department = table.Column<decimal>(nullable: false, defaultValueSql: "nextval('business.order_departments'::regclass)"),
                    name = table.Column<string>(nullable: false),
                    actived = table.Column<bool>(nullable: false),
                    fk_company = table.Column<decimal>(nullable: false),
                    createdat = table.Column<DateTime>(nullable: false),
                    updatedat = table.Column<DateTime>(nullable: true),
                    deletedat = table.Column<DateTime>(nullable: true),
                    fk_user_create = table.Column<decimal>(nullable: false),
                    fk_user_update = table.Column<decimal>(nullable: true),
                    fk_user_delete = table.Column<decimal>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_department", x => x.id_department);
                });

            migrationBuilder.CreateTable(
                name: "users",
                schema: "general",
                columns: table => new
                {
                    id_user = table.Column<decimal>(nullable: false, defaultValueSql: "nextval('general.order_users'::regclass)"),
                    full_name = table.Column<string>(nullable: false),
                    email = table.Column<string>(nullable: false),
                    password = table.Column<string>(nullable: true),
                    last_acess = table.Column<DateTime>(nullable: true),
                    createdat = table.Column<DateTime>(nullable: false),
                    updatedat = table.Column<DateTime>(nullable: true),
                    type_user = table.Column<int>(nullable: true),
                    fk_company_default = table.Column<decimal>(nullable: false),
                    fk_department = table.Column<decimal>(nullable: true),
                    phone = table.Column<string>(nullable: true),
                    url_image = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users", x => x.id_user);
                    table.ForeignKey(
                        name: "FK_users_department_fk_department",
                        column: x => x.fk_department,
                        principalSchema: "business",
                        principalTable: "department",
                        principalColumn: "id_department",
                        onDelete: ReferentialAction.SetNull);
                });

            migrationBuilder.CreateTable(
                name: "companies",
                schema: "business",
                columns: table => new
                {
                    id_company = table.Column<decimal>(nullable: false, defaultValueSql: "nextval('business.order_companies'::regclass)"),
                    full_name = table.Column<string>(nullable: false),
                    site = table.Column<string>(nullable: true),
                    url_logo = table.Column<string>(nullable: true),
                    createdat = table.Column<DateTime>(nullable: false),
                    updatedat = table.Column<DateTime>(nullable: true),
                    deletedat = table.Column<DateTime>(nullable: true),
                    fk_user_create = table.Column<decimal>(nullable: false),
                    fk_user_update = table.Column<decimal>(nullable: true),
                    fk_user_delete = table.Column<decimal>(nullable: true),
                    notification_phone = table.Column<string>(nullable: true),
                    days_contract = table.Column<int>(nullable: false),
                    plan = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_companies", x => x.id_company);
                    table.ForeignKey(
                        name: "FK_companies_users_fk_user_create",
                        column: x => x.fk_user_create,
                        principalSchema: "general",
                        principalTable: "users",
                        principalColumn: "id_user",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "surveys",
                schema: "business",
                columns: table => new
                {
                    id_survey = table.Column<decimal>(nullable: false, defaultValueSql: "nextval('business.order_surveys'::regclass)"),
                    title = table.Column<string>(nullable: false),
                    description = table.Column<string>(nullable: true),
                    language = table.Column<string>(nullable: true),
                    active = table.Column<bool>(nullable: false),
                    fk_company = table.Column<decimal>(nullable: false),
                    createdat = table.Column<DateTime>(nullable: false),
                    updatedat = table.Column<DateTime>(nullable: true),
                    deletedat = table.Column<DateTime>(nullable: true),
                    fk_user_create = table.Column<decimal>(nullable: false),
                    fk_user_update = table.Column<decimal>(nullable: true),
                    fk_user_delete = table.Column<decimal>(nullable: true),
                    color_button = table.Column<string>(type: "json", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_surveys", x => x.id_survey);
                    table.ForeignKey(
                        name: "FK_surveys_companies_fk_company",
                        column: x => x.fk_company,
                        principalSchema: "business",
                        principalTable: "companies",
                        principalColumn: "id_company",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_surveys_users_fk_user_create",
                        column: x => x.fk_user_create,
                        principalSchema: "general",
                        principalTable: "users",
                        principalColumn: "id_user",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "actions",
                schema: "general",
                columns: table => new
                {
                    id_action = table.Column<decimal>(nullable: false, defaultValueSql: "nextval('general.order_actions'::regclass)"),
                    type = table.Column<string>(nullable: false),
                    message = table.Column<string>(nullable: true),
                    createdat = table.Column<DateTime>(nullable: false),
                    fk_user_create = table.Column<decimal>(nullable: false),
                    fk_company = table.Column<decimal>(nullable: false),
                    credits = table.Column<int>(nullable: false),
                    fk_survey = table.Column<int>(nullable: true),
                    payedat = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_actions", x => x.id_action);
                    table.ForeignKey(
                        name: "FK_actions_companies_fk_company",
                        column: x => x.fk_company,
                        principalSchema: "business",
                        principalTable: "companies",
                        principalColumn: "id_company",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_actions_users_fk_user_create",
                        column: x => x.fk_user_create,
                        principalSchema: "general",
                        principalTable: "users",
                        principalColumn: "id_user",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "tokens",
                schema: "general",
                columns: table => new
                {
                    id_token = table.Column<decimal>(nullable: false, defaultValueSql: "nextval('general.order_tokens'::regclass)"),
                    code = table.Column<Guid>(nullable: false),
                    hits = table.Column<int>(nullable: false),
                    active = table.Column<bool>(nullable: false),
                    createdat = table.Column<DateTime>(nullable: false),
                    updatedat = table.Column<DateTime>(nullable: true),
                    fk_user_create = table.Column<decimal>(nullable: false),
                    fk_user_update = table.Column<decimal>(nullable: true),
                    fk_company = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tokens", x => x.id_token);
                    table.ForeignKey(
                        name: "FK_tokens_companies_fk_company",
                        column: x => x.fk_company,
                        principalSchema: "business",
                        principalTable: "companies",
                        principalColumn: "id_company",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_tokens_users_fk_user_create",
                        column: x => x.fk_user_create,
                        principalSchema: "general",
                        principalTable: "users",
                        principalColumn: "id_user",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "page_view",
                schema: "business",
                columns: table => new
                {
                    idpageview = table.Column<decimal>(nullable: false, defaultValueSql: "nextval('business.order_page_views'::regclass)"),
                    fk_survey = table.Column<decimal>(nullable: false),
                    acessdate = table.Column<DateTime>(nullable: false),
                    device_info = table.Column<string>(type: "json", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_page_view", x => x.idpageview);
                    table.ForeignKey(
                        name: "FK_page_view_surveys_fk_survey",
                        column: x => x.fk_survey,
                        principalSchema: "business",
                        principalTable: "surveys",
                        principalColumn: "id_survey",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "token_logs",
                schema: "general",
                columns: table => new
                {
                    id_token_log = table.Column<decimal>(nullable: false, defaultValueSql: "nextval('general.order_token_logs'::regclass)"),
                    ip = table.Column<string>(nullable: true),
                    http_method = table.Column<string>(nullable: true),
                    url_method = table.Column<string>(nullable: true),
                    status = table.Column<string>(nullable: true),
                    header = table.Column<string>(nullable: true),
                    body = table.Column<string>(nullable: true),
                    result = table.Column<string>(nullable: true),
                    createdat = table.Column<DateTime>(nullable: false),
                    fk_token = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_token_logs", x => x.id_token_log);
                    table.ForeignKey(
                        name: "FK_token_logs_tokens_fk_token",
                        column: x => x.fk_token,
                        principalSchema: "general",
                        principalTable: "tokens",
                        principalColumn: "id_token",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_companies_fk_user_create",
                schema: "business",
                table: "companies",
                column: "fk_user_create");

            migrationBuilder.CreateIndex(
                name: "IX_company_users_fk_company",
                schema: "business",
                table: "company_users",
                column: "fk_company");

            migrationBuilder.CreateIndex(
                name: "IX_company_users_fk_role",
                schema: "business",
                table: "company_users",
                column: "fk_role");

            migrationBuilder.CreateIndex(
                name: "IX_company_users_fk_user_create",
                schema: "business",
                table: "company_users",
                column: "fk_user_create");

            migrationBuilder.CreateIndex(
                name: "IX_department_fk_company",
                schema: "business",
                table: "department",
                column: "fk_company");

            migrationBuilder.CreateIndex(
                name: "IX_page_view_fk_survey",
                schema: "business",
                table: "page_view",
                column: "fk_survey");

            migrationBuilder.CreateIndex(
                name: "IX_surveys_fk_company",
                schema: "business",
                table: "surveys",
                column: "fk_company");

            migrationBuilder.CreateIndex(
                name: "IX_surveys_fk_user_create",
                schema: "business",
                table: "surveys",
                column: "fk_user_create");

            migrationBuilder.CreateIndex(
                name: "IX_actions_fk_company",
                schema: "general",
                table: "actions",
                column: "fk_company");

            migrationBuilder.CreateIndex(
                name: "IX_actions_fk_user_create",
                schema: "general",
                table: "actions",
                column: "fk_user_create");

            migrationBuilder.CreateIndex(
                name: "IX_actions_type",
                schema: "general",
                table: "actions",
                column: "type");

            migrationBuilder.CreateIndex(
                name: "IX_token_logs_fk_token",
                schema: "general",
                table: "token_logs",
                column: "fk_token");

            migrationBuilder.CreateIndex(
                name: "IX_tokens_code",
                schema: "general",
                table: "tokens",
                column: "code");

            migrationBuilder.CreateIndex(
                name: "IX_tokens_fk_company",
                schema: "general",
                table: "tokens",
                column: "fk_company");

            migrationBuilder.CreateIndex(
                name: "IX_tokens_fk_user_create",
                schema: "general",
                table: "tokens",
                column: "fk_user_create");

            migrationBuilder.CreateIndex(
                name: "IX_users_fk_department",
                schema: "general",
                table: "users",
                column: "fk_department");

            migrationBuilder.AddForeignKey(
                name: "FK_company_users_users_fk_user_create",
                schema: "business",
                table: "company_users",
                column: "fk_user_create",
                principalSchema: "general",
                principalTable: "users",
                principalColumn: "id_user",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_company_users_companies_fk_company",
                schema: "business",
                table: "company_users",
                column: "fk_company",
                principalSchema: "business",
                principalTable: "companies",
                principalColumn: "id_company",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_department_companies_fk_company",
                schema: "business",
                table: "department",
                column: "fk_company",
                principalSchema: "business",
                principalTable: "companies",
                principalColumn: "id_company",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_companies_users_fk_user_create",
                schema: "business",
                table: "companies");

            migrationBuilder.DropTable(
                name: "company_users",
                schema: "business");

            migrationBuilder.DropTable(
                name: "page_view",
                schema: "business");

            migrationBuilder.DropTable(
                name: "actions",
                schema: "general");

            migrationBuilder.DropTable(
                name: "token_logs",
                schema: "general");

            migrationBuilder.DropTable(
                name: "roles",
                schema: "general");

            migrationBuilder.DropTable(
                name: "surveys",
                schema: "business");

            migrationBuilder.DropTable(
                name: "tokens",
                schema: "general");

            migrationBuilder.DropTable(
                name: "users",
                schema: "general");

            migrationBuilder.DropTable(
                name: "department",
                schema: "business");

            migrationBuilder.DropTable(
                name: "companies",
                schema: "business");

            migrationBuilder.DropSequence(
                name: "order_companies",
                schema: "business");

            migrationBuilder.DropSequence(
                name: "order_company_users",
                schema: "business");

            migrationBuilder.DropSequence(
                name: "order_departments",
                schema: "business");

            migrationBuilder.DropSequence(
                name: "order_page_views",
                schema: "business");

            migrationBuilder.DropSequence(
                name: "order_surveys",
                schema: "business");

            migrationBuilder.DropSequence(
                name: "order_actions",
                schema: "general");

            migrationBuilder.DropSequence(
                name: "order_roles",
                schema: "general");

            migrationBuilder.DropSequence(
                name: "order_token_logs",
                schema: "general");

            migrationBuilder.DropSequence(
                name: "order_tokens",
                schema: "general");

            migrationBuilder.DropSequence(
                name: "order_users",
                schema: "general");
        }
    }
}

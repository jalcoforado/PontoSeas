using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using CSX_Server.Models;
using PliQ.Models;

namespace CSX_Server.Context
{
    public partial class CsxContext : DbContext
    {
        //1. Add DbSet <Model> 
        public virtual DbSet<Companies> Companies { get; set; }
        public virtual DbSet<CompanyUsers> CompanyUsers { get; set; }
        public virtual DbSet<Roles> Roles { get; set; }
        public virtual DbSet<Surveys> Surveys { get; set; }
        public virtual DbSet<Users> Users { get; set; }
        public virtual DbSet<PageView> PageViews { get; set;}
        public virtual DbSet<Actions> Actions { get; set; }
        public virtual DbSet<Department> Department { get; set; }
        public virtual DbSet<Tokens> Tokens { get; set; }
        public virtual DbSet<TokenLogs> TokenLogs { get; set; }

        //Views
        //public DbQuery<SurveyQuestionDashboard> SurveyQuestionDashboard{get;set;}

        public CsxContext(DbContextOptions<CsxContext> options): 
          base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //2. Add Sequence
            modelBuilder.HasSequence("order_users", schema: "general")
            .StartsAt(1)
            .IncrementsBy(1);

            modelBuilder.HasSequence("order_roles", schema: "general")
            .StartsAt(1)
            .IncrementsBy(1);

            modelBuilder.HasSequence("order_companies", schema: "business")
            .StartsAt(1)
            .IncrementsBy(1);

            modelBuilder.HasSequence("order_company_users", schema: "business")
            .StartsAt(1)
            .IncrementsBy(1);
            
            modelBuilder.HasSequence("order_surveys", schema: "business")
            .StartsAt(1)
            .IncrementsBy(1);

            modelBuilder.HasSequence("order_page_views", schema: "business")
            .StartsAt(1)
            .IncrementsBy(1);

            modelBuilder.HasSequence("order_actions", schema: "general")
            .StartsAt(1)
            .IncrementsBy(1);

            modelBuilder.HasSequence("order_departments", schema: "business")
            .StartsAt(1)
            .IncrementsBy(1);

            modelBuilder.HasSequence("order_tokens", schema: "general")
            .StartsAt(1)
            .IncrementsBy(1);            

            modelBuilder.HasSequence("order_token_logs", schema: "general")
            .StartsAt(1)
            .IncrementsBy(1);            

            //3. Add Mapping modelBuilder <entity>
            modelBuilder.Entity<Companies>(entity =>{
                entity.HasKey(c => c.id_company);
                entity.Property(c => c.id_company).HasDefaultValueSql("nextval('business.order_companies'::regclass)");
                entity.HasOne(c => c.Users).WithMany(e => e.Companies).IsRequired(true).HasForeignKey("fk_user_create");            
                entity.HasMany(c => c.CompanyUsers).WithOne(e => e.Companies).IsRequired(true).HasForeignKey("fk_company"); 
                entity.HasMany(d => d.Department).WithOne(d => d.Company).IsRequired(true).HasForeignKey("fk_company");              
                entity.Property(c => c.full_name).IsRequired(true);                          
            });
            modelBuilder.Entity<CompanyUsers>(entity =>{
                entity.HasKey(c => c.id_company_user);
                entity.Property(c => c.id_company_user).HasDefaultValueSql("nextval('business.order_company_users'::regclass)");
                entity.HasOne(c => c.Users).WithMany(c => c. CompanyUsers).IsRequired(true).HasForeignKey("fk_user_create");
            });
            modelBuilder.Entity<Roles>(entity =>
            { 
                entity.HasKey(r => r.id_role);
                entity.Property(r => r.id_role).HasDefaultValueSql("nextval('general.order_roles'::regclass)");
                entity.Property(r => r.permissions).HasColumnType("json");                
                entity.HasMany(c => c.CompanyUsers).WithOne(e => e.Roles).IsRequired(true).HasForeignKey("fk_role");
                entity.Property(r => r.title).IsRequired(true);
                entity.Property(r => r.description).IsRequired(true);
            });
            modelBuilder.Entity<Surveys>(entity =>{
                entity.HasKey(s => s.id_survey);
                entity.Property(s => s.id_survey).HasDefaultValueSql("nextval('business.order_surveys'::regclass)");
                entity.HasOne(s => s.Companies).WithMany(s => s.Survey).IsRequired(true).HasForeignKey("fk_company"); 
                entity.HasOne(c => c.Users).WithMany(c => c.Surveys).IsRequired(true).HasForeignKey("fk_user_create");
                entity.Property(s => s.title).IsRequired(true);
                entity.Property(s => s.active).IsRequired(true);
                entity.Property(s => s.createdat).IsRequired(true);   
                entity.Property(s => s.color_button).HasColumnType("json");   
            });
            modelBuilder.Entity<Users>(entity =>{
                entity.HasKey(u => u.id_user);
                entity.Property(u => u.id_user).HasDefaultValueSql("nextval('general.order_users'::regclass)");
                entity.HasOne(d => d.Department).WithMany(u => u.Users).OnDelete(DeleteBehavior.SetNull).IsRequired(false);                
                entity.Property(u => u.full_name).IsRequired(true);
                entity.Property(u => u.email).IsRequired(true);
                entity.Property(u => u.createdat).IsRequired(true);
            });
            modelBuilder.Entity<PageView>(entity =>{
                entity.HasKey(p => p.idpageview);
                entity.Property(c => c.idpageview).HasDefaultValueSql("nextval('business.order_page_views'::regclass)"); 
                entity.HasOne(p => p.Surveys).WithMany(p => p.PageViews).HasForeignKey("fk_survey");
                entity.Property(p => p.device_info).HasColumnType("json").IsRequired(true);
                entity.Property(p => p.acessdate).IsRequired(true);
            });
            //Add Departaments
            modelBuilder.Entity<Department>(entity =>{
                entity.HasKey(d => d.id_department);
                entity.Property(d => d.id_department).HasDefaultValueSql("nextval('business.order_departments'::regclass)");
                entity.HasMany(d => d.Users).WithOne(d => d.Department).HasForeignKey("fk_department");
                entity.HasOne(d => d.Company).WithMany(c => c.Department).HasForeignKey("fk_company");
                entity.Property(d => d.actived).IsRequired(true);
                entity.Property(d => d.name).IsRequired(true);
            });

            //Actions
            modelBuilder.Entity<Actions>(entity =>{
                entity.HasKey(s => s.id_action);
                entity.Property(s => s.id_action).HasDefaultValueSql("nextval('general.order_actions'::regclass)");
                entity.HasOne(s => s.Companies).WithMany(s => s.Actions).IsRequired(true).HasForeignKey("fk_company");                    
                entity.HasOne(c => c.Users).WithMany(c => c.Actions).IsRequired(true).HasForeignKey("fk_user_create");
                entity.Property(s => s.type).IsRequired(true);
                entity.Property(s => s.createdat).IsRequired(true);   
                entity.HasIndex(c => c.type);
            });

            modelBuilder.Entity<Tokens>(entity =>{
                entity.HasKey(p => p.id_token);
                entity.Property(p => p.id_token).HasDefaultValueSql("nextval('general.order_tokens'::regclass)");
                entity.HasOne(p => p.Companies).WithMany(p => p.Tokens).IsRequired(true).HasForeignKey("fk_company");                
                entity.HasOne(c => c.Users).WithMany(c => c.Tokens).IsRequired(true).HasForeignKey("fk_user_create");
                entity.HasIndex(c => c.code);
            });

            modelBuilder.Entity<TokenLogs>(entity =>{
                entity.HasKey(p => p.id_token_log);
                entity.Property(p => p.id_token_log).HasDefaultValueSql("nextval('general.order_token_logs'::regclass)");
                entity.HasOne(p => p.Token).WithMany(p => p.TokenLogs).IsRequired(true).HasForeignKey("fk_token");                
            });

            //Create view
            //modelBuilder.Query<SurveyQuestionDashboard>().ToView("vi_survey_question_dashboard","analytics");
        }
    }
}
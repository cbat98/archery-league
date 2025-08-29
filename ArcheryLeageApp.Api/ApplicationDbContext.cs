using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext : DbContext
{

    public DbSet<Player> Players { get; set; }
    public DbSet<League> Leagues { get; set; }
    public DbSet<Event> Events { get; set; }
    public DbSet<Round> Rounds { get; set; }
    public DbSet<Shot> Shots { get; set; }
    public DbSet<LeagueParticipant> LeagueParticipants { get; set; }
    public DbSet<LeaguePointAward> LeaguePointAwards { get; set; }
    public DbSet<AwardReason> AwardReasons { get; set; }

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<LeagueParticipant>()
            .HasKey(lp => new { lp.PlayerId, lp.LeagueId });
    }
}

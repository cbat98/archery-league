using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("[controller]")]
[ApiController]
public class LeaguesController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public LeaguesController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<League>>> GetLeagues()
    {
        return await _context.Leagues.ToListAsync();
    }


    [HttpGet("{id}")]
    public async Task<ActionResult<League>> GetLeague(int id)
    {
        var league = await _context.Leagues.FindAsync(id);

        return (league is null) ? NotFound() : league;
    }

    [HttpPost]
    public async Task<ActionResult<League>> PostLeague(League league)
    {
        _context.Leagues.Add(league);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetLeague), new { id = league.LeagueId }, league);
    }
}


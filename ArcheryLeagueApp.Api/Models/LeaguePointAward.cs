public class LeaguePointAward
{
    public int AwardId { get; set; }
    public int PlayerId { get; set; }
    public int LeagueId { get; set; }
    public int EventId { get; set; }
    public int RoundId { get; set; }
    public int PointsAwarded { get; set; }
    public string Reason { get; set; }
    public DateTime AwardDate { get; set; }
}

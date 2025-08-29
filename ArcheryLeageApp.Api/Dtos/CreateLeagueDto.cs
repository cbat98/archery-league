using System.ComponentModel.DataAnnotations;

public class CreateLeagueDto
{
    [Required]
    [MaxLength(100)]
    public string Name { get; set; }
}

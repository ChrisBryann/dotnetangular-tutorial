using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext // gives a session for our database
    {
        public DataContext(DbContextOptions options) : base(options) 
        { 
        }

        public DbSet<AppUser> Users { get; set; }
    }
}

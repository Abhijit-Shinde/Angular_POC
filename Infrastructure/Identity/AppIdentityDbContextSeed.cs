using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "abhijit",
                    Email = "abhijit@test.com",
                    UserName = "abhijit@test.com",
                    Address = new Address
                    {
                        FirstName = "abhijit",
                        LastName = "shinde",
                        Street = "46 Street Road",
                        City = "pune",
                        State = "MH",
                        ZipCode = "411001"
                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}
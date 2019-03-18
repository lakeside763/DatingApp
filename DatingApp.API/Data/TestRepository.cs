// using System;
// using System.Threading.Tasks;
// using DatingApp.API.Models;

// namespace DatingApp.API.Data
// {
//     public class TestRepository : IAuthRepository
//     {
//         private readonly DataContext _context;
//         public TestRepository(DataContext context)
//         {
//             _context = context;
//         }
//         public Task<User> Login(string username, string password)
//         {
            
//         }

//         public async Task<User> RegisterAsync(User user, string password)
//         {
//             byte[] passwordHash, passwordSalt;
//             CreatePasswordHash(password, out passwordHash, out passwordSalt) {
                
//                 user.PasswordHash = passwordHash;
//                 user.PasswordSalt = passwordSalt;

//                 await _context.Users.AddAsync(user);
//                 await _context.SaveChangesAsync();

//                 return user;
//             }
//         }

//         private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
//         {
//             throw new NotImplementedException();
//         }

//         public Task<bool> UserExists(string username)
//         {
//             throw new System.NotImplementedException();
//         }
//     }
// }
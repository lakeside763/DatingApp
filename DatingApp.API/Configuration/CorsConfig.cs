using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.Extensions.DependencyInjection;

namespace DatingApp.API.Configuration
{
    public class CorsConfig
    {
        public CorsConfig(IServiceCollection services)
        {
            services.AddCors(config => {
                var policy = new CorsPolicy();
                policy.Headers.Add("*");
                policy.Methods.Add("*");
                policy.Origins.Add("*");
                policy.SupportsCredentials = true;
                config.AddPolicy("policy", policy);
            });
        }
    }
}
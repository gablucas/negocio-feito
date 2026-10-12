using Domain.Exceptions;
using Domain.Extensions;

namespace API.Middlewares
{
    public class ExceptionHandlingMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ExceptionHandlingMiddleware> _logger;

        public ExceptionHandlingMiddleware(RequestDelegate next, ILogger<ExceptionHandlingMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (ConflictException ex)
            {
                await WriteResponse(context, StatusCodes.Status409Conflict, ex.Message);
            }
            catch (DomainException ex)
            {
                await WriteResponse(context, StatusCodes.Status400BadRequest, ex.Message);
            }
            catch (NotFoundException ex)
            {
                await WriteResponse(context, StatusCodes.Status404NotFound, ex.Message);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Erro não tratado");
                await WriteResponse(context, StatusCodes.Status500InternalServerError,
                    "Ocorreu um erro inesperado.");
            }
        }

        private static async Task WriteResponse(HttpContext context, int statusCode, string message)
        {
            context.Response.StatusCode = statusCode;
            context.Response.ContentType = "application/json";
            await context.Response.WriteAsJsonAsync(new { message });
        }
    }
}

using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class ProductRepository : IProductRepository
    {
        private readonly StoreContext _context;
        public ProductRepository(StoreContext context)
        {
            _context = context;
        }

        public async Task<Product> GetProductByIdAsync(int id)
        {
            return await _context.Products
                .Include(p => p.Category)
                .Include(p => p.Store)
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<IReadOnlyList<Product>> GetProductsAsync()
        {
            return await _context.Products
                .Include(p => p.Category)
                .Include(p => p.Store)
                .ToListAsync();
                
        }

        public async Task<IReadOnlyList<Category>> GetProductsCategoriesAsync()
        {
            return await _context.Categories.ToListAsync();
        }

        public async Task<IReadOnlyList<Store>> GetProductsStoresAsync()
        {
            return await _context.Stores.ToListAsync();
        }
    }
}
using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IProductRepository _repo;
        public ProductsController(IProductRepository repo )
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts(){
            var products = await _repo.GetProductsAsync();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id){
            return await _repo.GetProductByIdAsync(id);
        }

        [HttpGet("store")]
        public async Task<ActionResult<List<Store>>> GetProductsStores(){
           var stores = await _repo.GetProductsStoresAsync();
           return Ok(stores);
        }

         [HttpGet("category")]
        public async Task<ActionResult<List<Category>>> GetProductsCategories(){
           var categories = await _repo.GetProductsCategoriesAsync();
           return Ok(categories);
        }
    }
}
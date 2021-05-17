using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos;
using API.Errors;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specification;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IGenericRepository<Product> _productsrepo;
        private readonly IGenericRepository<Store> _storesrepo;
        private readonly IGenericRepository<Category> _categoriesrepo;
        private readonly IMapper _mapper;
        public ProductsController(IGenericRepository<Product> productsrepo,IGenericRepository<Store> storesrepo,IGenericRepository<Category> categoriesrepo, IMapper mapper){
            _mapper = mapper;
            _categoriesrepo = categoriesrepo;
            _storesrepo = storesrepo;
            _productsrepo = productsrepo;

        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<ProductToReturnDto>>> GetProducts(){

            var spec = new ProductWithCategoryAndStoreSpecification();
            var products = await _productsrepo.ListAsync(spec);
            return Ok(_mapper.Map<IReadOnlyList<Product>, IReadOnlyList<ProductToReturnDto>>(products));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ProductToReturnDto>> GetProduct(int id){

            var spec = new ProductWithCategoryAndStoreSpecification(id);
            var products = await _productsrepo.GetEntityWithSpec(spec);
            if (products == null) return NotFound(new ApiResponse(404));

            return _mapper.Map<Product , ProductToReturnDto>(products);
        }

        [HttpGet("store")]
        public async Task<ActionResult<List<Store>>> GetProductsStores(){
           var stores = await _storesrepo.ListAllAsync();
           return Ok(stores);
        }

         [HttpGet("category")]
        public async Task<ActionResult<List<Category>>> GetProductsCategories(){
           var categories = await _categoriesrepo.ListAllAsync();
           return Ok(categories);
        }
    }
}
using Core.Entities;
using Core.Specifications;

namespace Core.Specification
{
    public class ProductWithFiltersForCountSpecification : BaseSpecification<Product>
    {
        public ProductWithFiltersForCountSpecification(ProductSpecParams productParams) : base(x => 
                (string.IsNullOrEmpty(productParams.Search) || x.Name.ToLower().Contains(productParams.Search)) &&
                (!productParams.CtrId.HasValue || x.CategoryId == productParams.CtrId) && 
                (!productParams.StrId.HasValue || x.StoreId == productParams.StrId))
        {

        }
    }
}
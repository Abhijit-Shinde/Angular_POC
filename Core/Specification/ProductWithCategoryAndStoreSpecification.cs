using Core.Entities;
using Core.Specifications;

namespace Core.Specification
{
    public class ProductWithCategoryAndStoreSpecification : BaseSpecification<Product>
    {
        public ProductWithCategoryAndStoreSpecification(ProductSpecParams productParams) 
            : base(x => 
            (string.IsNullOrEmpty(productParams.Search) || x.Name.ToLower().Contains(productParams.Search)) &&
            (!productParams.CtrId.HasValue || x.CategoryId == productParams.CtrId) && 
            (!productParams.StrId.HasValue || x.StoreId == productParams.StrId))
        {
            AddInclude(x => x.Category);
            AddInclude(x => x.Store);
            AddOrderBy(x => x.Name);
            ApplyPaging(productParams.PageSize * (productParams.PageIndex - 1), productParams.PageSize);
            
            if (!string.IsNullOrEmpty(productParams.sort))
            {
                switch (productParams.sort)
                {
                    case "priceAsc":
                        AddOrderBy(p => p.Price);
                        break;
                    case "priceDesc":
                        AddOrderByDescending(p => p.Price);
                        break;
                    default:
                        AddOrderBy(n => n.Name);
                        break;
                }
            }
        }

        public ProductWithCategoryAndStoreSpecification(int id) : base(x => x.Id == id)
        {
            AddInclude(x => x.Category);
            AddInclude(x => x.Store);
        }
    }
}
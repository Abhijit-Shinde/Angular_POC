using System;
using System.Linq.Expressions;
using Core.Entities;

namespace Core.Specification
{
    public class ProductWithCategoryAndStoreSpecification : BaseSpecification<Product>
    {
        public ProductWithCategoryAndStoreSpecification()
        {
            AddInclude(x => x.Category);
            AddInclude(x => x.Store);
        }

        public ProductWithCategoryAndStoreSpecification(int id) : base(x => x.Id == id)
        {
            AddInclude(x => x.Category);
            AddInclude(x => x.Store);
        }
    }
}
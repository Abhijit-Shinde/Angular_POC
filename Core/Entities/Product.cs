namespace Core.Entities
{
    public class Product : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string PictureUrl { get; set; }
        public Category Category { get; set; }
        public int CategoryId { get; set; }
        public Store Store { get; set; }
        public int StoreId { get; set; }

    }
}
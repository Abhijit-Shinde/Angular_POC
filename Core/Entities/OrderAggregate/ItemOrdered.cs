namespace Core.Entities.OrderAggregate
{
    public class ItemOrdered
    {
        public ItemOrdered()
        {
        }

        public ItemOrdered(int productItemId, string productName, string pictureUrl)
        {
            ProductItemId = productItemId;
            ProductName = productName;
            PictureUrl = pictureUrl;
        }

        public int ProductItemId { get; set; }
        public string ProductName { get; set; }
        public string PictureUrl { get; set; }
    }
} 
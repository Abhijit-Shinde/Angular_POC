namespace Core.Specifications
{
    public class ProductSpecParams
    {
        private const int MaxPageSize = 20;
        public int PageIndex { get; set; } = 1; //by defualt first page

        private int _pageSize = 6;  //can be any number b/w 1 -50
        public int PageSize
        {
            get => _pageSize;
            set => _pageSize = (value > MaxPageSize) ? MaxPageSize : value; //returns 20 is value is greater or else the value
        }

        public int? StrId { get; set; }
        public int? CtrId { get; set; }
        public string sort { get; set; }
        private string _search;
        public string Search
        {
            get => _search;
            set => _search = value.ToLower(); //if specified in upper case we convert to lower case
        }
    }
} 
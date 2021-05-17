using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config
{
    public class ProductConfiguration : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.Property(p => p.Name).IsRequired().HasMaxLength(20);
            builder.Property(p => p.Description).IsRequired();
            builder.Property(p => p.Price).HasColumnType("decimal(18,2)");
            builder.Property(p => p.PictureUrl).IsRequired();

            // Not Required as Entity Framework specified this in our Migrations
            builder.HasOne(b => b.Category).WithMany()
                .HasForeignKey(p => p.CategoryId);
            builder.HasOne(b => b.Store).WithMany()
                .HasForeignKey(p => p.StoreId);
            
        }
    }
}
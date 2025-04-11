
import { Link } from "react-router-dom";
import { categories } from "@/lib/data";

const Categories = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-navy-900 text-center mb-4">Shop by Category</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          Find the perfect door for every room in your Nigerian home
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/catalog?category=${category.id}`}
              className="group relative overflow-hidden rounded-lg h-64 card-hover"
            >
              <img 
                src={category.image} 
                alt={category.name}
                className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold">{category.name}</h3>
                <p className="text-white/80 text-sm mt-1">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

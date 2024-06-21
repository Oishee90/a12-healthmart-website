import { Link } from "react-router-dom";

const Categories = ({ CategorieItem, medicines }) => {
  return (
    <div className="h-[500px] flex">
      <Link to={`/categories/${CategorieItem.categoryName}`} className="block w-full">
        <div className="card bg-base-100 shadow-xl h-full">
          <figure className="h-full">
            <img className="h-full" src={CategorieItem.categoryImage} alt="Category" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-oswald">{CategorieItem.categoryName}</h2>
            <p className="font-raleway text-xl font-bold"> {CategorieItem.description}</p>
            <p className="font-raleway text-xl font-medium"> The number of medicines : {medicines.length}</p>
          
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Categories;

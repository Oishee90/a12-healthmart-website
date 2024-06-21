

const Categories = ( {CategorieItem, medicines}) => {
    console.log(medicines)
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
  <figure><img src={CategorieItem.categoryImage} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{CategorieItem.categoryName}</h2>
    <p>{medicines.length}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Categories;
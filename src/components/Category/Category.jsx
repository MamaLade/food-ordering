import "./Category.css";

function Category() {

    const categories = [
        "🍕 Pizza",
        "🍔 Burger",
        "🍟 Món phụ",
        "🥤 Đồ uống",
        "🍰 Tráng miệng"
    ];

    return (

        <section className="category">

            <h2>Danh mục</h2>

            <div className="category-list">

                {categories.map((item) => (

                    <div className="category-card" key={item}>

                        {item}

                    </div>

                ))}

            </div>

        </section>

    );

}

export default Category;
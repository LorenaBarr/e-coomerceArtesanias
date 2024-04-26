import { useState } from "react";
import CategoryHeader from "./CategoryHeader";
import ProductList from "./ProductList";

const Categories = () => {
    const [filterWord, setFilterWord] = useState(null);
    console.log(setFilterWord);

    return (
        <section className=" text-black h-[100rem]">
            <CategoryHeader
                setFilterWord={setFilterWord}
                filterWord={filterWord}
            />
            <ProductList filterWord={filterWord} />
        </section>
    );
};

export default Categories;

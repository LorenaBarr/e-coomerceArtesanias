import React from "react";
import Nabvar from "../../Components/Nabvar/Nabvar";
import Footer from "../../Components/Footer/Footer";
import Menu from "../../Components/Nabvar/Menu";
import { categorias } from "../../constants/api_keys";

const CategoryHeader = ({ setFilterWord, filterWord }) => {
    const handleChangeCategory = () => {
        
    };
    return (
        <div className="p-4">
            <h2 className="text-3xl font-bold mb-4">Lista Productos</h2>
            <div className="section-content">
                {/* Selector de categorías */}
                <div className="mb-4">
                    <label htmlFor="category" className="mr-2">
                        Categoría:
                    </label>
                    <select
                        id="category"
                        className="border rounded-md p-2 capitalize"
                        onChange={handleChangeCategory}
                        value={filterWord}
                    >
                        {categorias.map((category, index) => (
                            <option key={index} value={category}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default CategoryHeader;

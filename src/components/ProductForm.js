import { useForm } from "../hooks/useForm";
import Loader from "./Loader";

const initialForm = {
    sku: "",
    name: "",
    quantity: 0,
    price: 0,
};

let styles = {
    fontWeight: "bold",
    color: "#dc3545",
};

const validationsForm = (form) => {
    let errors = {};

    if (!form.sku.trim())
        errors.sku = "Field 'sku' is required";

    if (!form.name.trim()) 
        errors.name = "Field 'name' is required";

    if(form.quantity < 1) 
        errors.quantity = "Field 'quantity' must not be less than zero";

    if(form.price < 1) 
        errors.price = "Field 'price' must not be less than zero";

    return errors;
};

const ProductForm = ({ addProduct }) => {
    const {
        form,
        errors,
        loading,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useForm(initialForm, validationsForm, addProduct);

    return (
        <div>
        <h3>Add Product</h3>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="sku"
                placeholder="Sku"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.sku}
                required
            />
            {errors.sku && <p style={styles}>{errors.sku}</p>}
            <input
                type="text"
                name="name"
                placeholder="Product Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.name}
                required
            />
            {errors.name && <p style={styles}>{errors.name}</p>}
            <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.quantity}
                required
            />
            {errors.quantity && <p style={styles}>{errors.quantity}</p>}
            <input
                type="number"
                name="price"
                placeholder="Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.price}
                required
            />
            {errors.price && <p style={styles}>{errors.price}</p>}
            <input type="submit" value="Add" />
        </form>
        {loading && <Loader />}
        </div>
    );
};

export default ProductForm;
import { useState } from "react";

export const useForm = (initialForm, validateForm, addProduct) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(form));

        if (Object.keys(errors).length === 0) {
        setLoading(true);
        //simulando HTTP POST
        setTimeout(() => {
            setLoading(false);
            addProduct(form);
            setForm(initialForm);
        }, 1000);
        } else {
            return;
        }
    };

    return {
        form,
        errors,
        loading,
        handleChange,
        handleBlur,
        handleSubmit,
    };
};
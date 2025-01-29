import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import axios from "axios";

const CreateProduct =() =>{
    const [image, setImages] = useState([]);
    const [previewImages,setpreviewImages]=useState([]);
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [category,setCategory]=useState("");
    const [tags,setTags]=useState("");
    const [price,setPrice]=useState("");
    const [stock,setStock]=useState("");
    const [email,setEmail]=useState("");
    

    const categoriesData = [

        {title: "Electronic"},
        {title: "Fashion"},
        {title: "Books"},
        {title: "Home Application"},
    ];

    const handleImageChange = (e) =>{
        const files = Array.from(e.target.files);
        setImages((prevImage) => prevImage.comcat(files));

        const imagePreview = files.map((file)=>URL.createObjectURL(files));
        setpreviewImages((prevImage) => prevImage.concat(imagePreview));
    };
    const handleSubmit = async(e)=>{
        e.preventDefault();

            const formData = new FormData();
                formData.append("name",name);
                formData.append("description",description);
                formData.append("catergory",category);
                formData.append("tags",tags.trim())
                formData.append("price",price);
                formData.append("stock",stock);
                formData.append("email",email);

                    image.forEach((image,index)=>{
                        console.log(`Appending image ${(index + 1)}`,image.name);
                        formData.append("images[]",image);
                        
                        });


                        console.log("FormData before sending...");
                        formData.forEach((value,key)=>{
                            console.log(key,value);
                        });
                        
                        try{
                            const response = await axios.post("http://localhost:8080/api/v2/product/create-product",formData,
                            {
                                headers : {
                                    "content-Type": "multipart/form-data",
                                },
                            }
                        )
                        
                        if(response.status === 201){
                            alert("product created successfully");
                            setImages([]);
                            setpreviewImages([]);
                            setName("");
                            setDescription("");
                            setCategory("");
                            setTags("");
                            setPrice("");
                            setStock("");
                            setEmail("");
                        }
                    } catch(err){
                            console.error("Error Creating product",err.response?.data || err.message);
                            alert("Failed to create product.Please check the data and try again.");
                        }

                    
    };
    return (
        <div className="w-[90%] max-w-[500px] bg-white shadow h-auto rounded-[4px] p-4 mx-auto">
            <h5 className="text-[24px] font-semibold text-center">Create Product</h5>
            <form onSubmit={handleSubmit}>
                <div className="mt-4">
                    <label className="pb-1 block">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        value={email}
                        className="w-full p-2 border rounded"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div>
                    <label className="pb-1 block">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={name}
                        className="w-full p-2 border rounded"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter product name"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label className="pb-1 block">
                        Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        value={description}
                        className="w-full p-2 border rounded"
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter product description"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <div className="mt-4">
                    <label className="pb-1 block">
                        Category <span className="text-red-500">*</span>
                    </label>
                    <select
                        className="w-full p-2 border rounded"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="">Choose a category</option>
                        {categoriesData.map((i) => (
                            <option value={i.title} key={i.title}>
                                {i.title}
                            </option>
                        ))}
                    </select>
                </div>
<div className="mt-4">
                    <label className="pb-1 block">Tags</label>
                    <input
                        type="text"
                        value={tags}
                        className="w-full p-2 border rounded"
                        onChange={(e) => setTags(e.target.value)}
                        placeholder="Enter product tags"
                    />
                </div>
                <div className="mt-4">
                    <label className="pb-1 block">
                        Price <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="number"
                        value={price}
                        className="w-full p-2 border rounded"
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter product price"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label className="pb-1 block">
                        Stock <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="number"
                        value={stock}
                        className="w-full p-2 border rounded"
                        onChange={(e) => setStock(e.target.value)}
                        placeholder="Enter stock quantity"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label className="pb-1 block">
                        Upload Images <span className="text-red-500">*</span>
                    </label>
                    <input
                        name="image"
                        type="file"
                        id="upload"
                        className="hidden"
                        multiple
                        onChange={handleImageChange}
                        required
                    />
                    <label htmlFor="upload" className="cursor-pointer">
                        <AiOutlinePlusCircle size={30} color="#555" />
                    </label>
                    <div className="flex flex-wrap mt-2">
                        {previewImages.map((img, index) => (
                            <img
                                src={img}
                                key={index}
                                alt="Preview"
                                className="w-[100px] h-[100px] object-cover m-2"
                            />
                        ))}
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full mt-4 bg-blue-500 text-white p-2 rounded"
                >
                    Create
                </button>
            </form>
        </div>
    );
};

export default CreateProduct;
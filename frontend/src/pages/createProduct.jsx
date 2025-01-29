import React,{useState } from "react";
import {AiOutlinePluseCircle} from "react-icons/ai";
import axios from "axios";

const CreateProduct = () =>{
    create 
    const [previewImages,setPreviewImages]=useState([]);
    const [name, setName] = useState("");
    const [description,setDescription] = useState("");
    const [category,seCategory] = useState("");
    const [price, setPrice] = useState("");
    const [stock,setStock] = useState("");
    const [email,setEmail] = useState("");

    const categoriesData = [
        {title: "Electronic"},
        {title: "Fashion"},
        {title: "Books"},
        {title: "Home Application"},

    ];


    const handleImageChange = (e) =>{
        const files = Array.from(e.target.files);
        setPreviewImages((prevImages) => prevImages.concat(files));

        const imagePreviews = files.map((file)=>URL.createObjectURL(file));
        setPreviewImages((prevImages) => prevImages.concat(imagePreviews));

    };


    const handleSubmit = async(e)=>{
        e.preventDefault();

             const formData = new FormData();
                 formData.append("name",name);
                 formData.append("description",description);
                 formData.append("category",category);
                 formData.append("tags",tags.trim())
                 formData.append("price",price);
                 formData.append("stock",stock);
                 formData.append("email",email);
            
            // Ensure images are appending correctly
            images.forEach((Image)) 
    }

}
import React, {useEffect, useState} from 'react';
import {Text} from "../Text/index.jsx";
import {Input} from "../Input/index.jsx";
import {Button} from "../Button/index.jsx";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const UpdateFood = () => {

    let navigate = useNavigate();
    let {id} = useParams();
    const [data, setData] = useState([]);




    const ExistingData=async (id)=>{
        let res=await axios.get(`/api/GetProductById/${id}`);
        console.log(res);
        // window.alert(JSON.stringify(res));
        setData(res.data['data'])
    }

    const UpdateData=async (event)=>{
        event.preventDefault();
        let formData = new FormData(event.target);
        let title = formData.get("title");
        let category = formData.get("category");
        let food_code = formData.get("food_code");
        let quantity = formData.get("quantity");
        let price = formData.get("price");
        let image = formData.get("image");

        await axios.post(`/api/UpdateProduct/${id}`,{
            title:title,
            category:category,
            food_code:food_code,
            quantity:quantity,
            price:price,
            image:image
        })

        navigate("/")

    }

    useEffect(() => {
        (async ()=>{
            await ExistingData(id)
        })()
    }, []);

    return (
        <div>
            <div className="mt-[104px] flex w-[75%] flex-col items-start gap-[42px] md:w-full md:p-5">
                <Text size="lg" as="p" className="tracking-[0.50px] !text-blue_gray-900">
                    Update Food Item
                </Text>
                {/*<h1>{JSON.stringify(data)}</h1>*/}
                <form onSubmit={UpdateData}>
                    <div className="flex items-start gap-[49px] self-stretch md:flex-col">
                    <div className="flex w-full flex-col items-start gap-[37px]">
                        <div className="flex flex-col items-start gap-2 self-stretch">
                            <Text size="md" as="p" className="tracking-[0.50px]">
                                Food Name
                            </Text>
                            <Input shape="round" defaultValue={data!==null?(data.title):("")} className="w-[315px] h-[54px]" name="title"/>
                        </div>
                        <div className="flex flex-col items-start gap-1.5 self-stretch">
                            <Text size="md" as="p" className="tracking-[0.50px]">
                                Food Category{" "}
                            </Text>
                            <Input shape="round" defaultValue={data!==null?(data["category"]):("")} className="w-[315px] h-[54px]" name="category"/>
                        </div>

                        <Button
                            type="submit"
                            color="indigo_400"
                            size="md"
                            className="min-w-[158px] rounded-[10px] font-bold tracking-[0.50px] sm:px-5"
                        >
                            Update
                        </Button>
                    </div>
                    <div className="flex w-full flex-col gap-[30px]">
                        <div className="flex flex-col items-start gap-2">
                            <Text size="md" as="p" className="tracking-[0.50px]">
                                Food Code
                            </Text>
                            <Input shape="round" defaultValue={data!==null?(data.food_code):("")} className="w-[315px] h-[54px]" name="food_code"/>
                        </div>
                        <div className="flex flex-col items-start gap-[7px]">
                            <Text size="md" as="p" className="tracking-[0.50px]">
                                QTY
                            </Text>
                            <Input shape="round" defaultValue={data!==null?(data.quantity):("")} className="w-[315px] h-[54px]" name="quantity"/>
                        </div>
                    </div>
                    <div className="flex w-full flex-col gap-[29px]">
                        <div className="flex flex-col items-start gap-1.5">
                            <Text size="md" as="p" className="tracking-[0.50px]">
                                Food Image
                            </Text>
                            <Input shape="round" defaultValue={data!==null?(data.image):("")} className="w-[315px] h-[54px]" name="image"/>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <Text size="md" as="p" className="tracking-[0.50px]">
                                Price
                            </Text>
                            <Input shape="round" defaultValue={data!==null?(data.price):("")} className="w-[315px] h-[54px]" name="price"/>
                        </div>
                    </div>
                </div>
                </form>
                </div>
        </div>
    );
};

export default UpdateFood;
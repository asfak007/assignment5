import React from 'react';
import { Input, Text, Button } from "../../components";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const CreateFood = () => {
    let navigate = useNavigate();
    const CreateFood =async (event)=>{
        event.preventDefault();
        let formData = new FormData(event.target);
        let title = formData.get("title");
        let category = formData.get("category");
        let food_code = formData.get("food_code");
        let quantity = formData.get("quantity");
        let price = formData.get("price");
        let image = formData.get("image");

        await axios.post('api/CreateProduct',{
           title:title,
            category:category,
            food_code:food_code,
            quantity:quantity,
            price:price,
           image:image
        })
        navigate("/")
    }
    return (
        <div>
            <div className="mt-[101px] flex w-[75%] flex-col items-start gap-11 md:w-full md:p-5">
                <Text size="lg" as="p" className="tracking-[0.50px] !text-blue_gray-900">

                    Create Food Item
                </Text>
                <form onSubmit={CreateFood}>
                    <div className="flex items-start gap-[49px] self-stretch md:flex-col">
                    {/* food name category section */}
                    <div className="flex w-full flex-col items-start gap-[37px]">
                        <div className="flex flex-col items-start self-stretch gap-2">
                            <Text size="md" as="p" className="tracking-[0.50px]">
                                Food Name
                            </Text>
                            <Input shape="round" className="w-[315px] h-[54px]" name="title"/>
                        </div>
                        <div className="flex flex-col items-start gap-1.5 self-stretch">
                            <Text size="md" as="p" className="tracking-[0.50px]">
                                Food Category{" "}
                            </Text>
                            <Input shape="round" className="w-[315px] h-[54px]" name="category"/>
                        </div>
                        <Button
                            color="indigo_400"
                            size="md"
                            className="min-w-[158px] rounded-[10px] font-bold tracking-[0.50px] sm:px-5"
                        >
                            Submit
                        </Button>
                    </div>

                    {/* food code qty section */}
                    <div className="flex w-full flex-col gap-[30px]">
                        <div className="flex flex-col items-start gap-2">
                            <Text size="md" as="p" className="tracking-[0.50px]">
                                Food Code
                            </Text>
                            <Input shape="round" className="w-[315px] h-[54px]" name="food_code"/>
                        </div>
                        <div className="flex flex-col items-start gap-[7px]">
                            <Text size="md" as="p" className="tracking-[0.50px]">
                                QTY
                            </Text>
                            <Input shape="round" className="w-[315px] h-[54px]" name="quantity"/>
                        </div>
                    </div>

                    {/* food image price section */}
                    <div className="flex w-full flex-col gap-[29px]">
                        <div className="flex flex-col items-start gap-1.5">
                            <Text size="md" as="p" className="tracking-[0.50px]">
                                Food Image
                            </Text>
                            <Input shape="round" className="w-[315px] h-[54px]" name="image"/>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <Text size="md" as="p" className="tracking-[0.50px]">
                                Price
                            </Text>
                            <Input shape="round" className="w-[315px] h-[54px]" name="price"/>
                        </div>
                    </div>

                </div>
                </form>
                </div>
        </div>
    );
};

export default CreateFood;
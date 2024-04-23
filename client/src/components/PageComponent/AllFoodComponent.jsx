import React, {useEffect, useState} from 'react';
import { Button, Text, Img } from "../../components";

import axios from "axios";
import {Link} from "react-router-dom";



const AllFoodComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async ()=>{
             await ReadData()
        })()
    }, []);

    const DeleteData=async (id)=>{
        await axios.post(`api/DeleteProduct/${id}`);
        await ReadData()
    }
    const ReadData=async ()=>{
        let res=await axios.get("api/GetProduct");

        setData(res.data['data'])
    }

    return (
        <div>
            <div className="mt-[104px] flex flex-1 flex-col items-start gap-10 md:self-stretch">
                <Text size="md" as="p" className="tracking-[0.50px] font-poppins size-[14px] w-[87px] h-[22px]">
                    All Food List
                </Text>

                {/* food list section */}
                <div className="grid grid-cols-4 gap-[30px] self-stretch md:grid-cols-2 sm:grid-cols-1">
                    {data.map((d, index) => (
                        <div
                            key={"allfood" + index}
                            className="flex w-full flex-col items-center rounded-[10px] border border-solid border-blue_gray-100 bg-white-A700 pb-[18px]"
                        >
                            <div className="relative h-[121px] self-stretch md:h-auto">
                                <Img
                                    src={d.image}
                                    alt="image"
                                    className="h-[131px] w-full rounded-tl-[10px] rounded-tr-[10px] object-cover"
                                />
                                <Button
                                    size="xs"
                                    shape="round"
                                    className="absolute right-[12.00px] top-[15.00px] m-auto min-w-[64px] font-medium tracking-[0.50px]"
                                >
                                    Tk: {d.price}
                                </Button>
                            </div>
                            <Text
                                as="p"
                                className="mt-3.5 w-[90%] leading-5 tracking-[0.50px] !text-blue_gray-900_01 md:w-full md:p-5"
                            >
                                {d.title}
                            </Text>
                            <div className="relative ml-[9px] mt-[10px]  flex gap-5 self-start md:ml-0">
                                <Link to={`/updateFood/${d._id}`}>
                                <Button color="gray_100_01" shape="round" className="min-w-[67px] ml-2 font-inter sm:px-5">
                                    Edit
                                </Button>
                                </Link>
                                <Button onClick={()=>DeleteData(d._id)} color="deep_orange_50" shape="round" className="min-w-[67px] font-inter">
                                    Delete
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/*{*/}
            {/*    (data.map((item, i) => {*/}
            {/*        return (*/}
            {/*            <h1 key={i}>{item._id}</h1>*/}
            {/*        )*/}
            {/*    }))*/}
            {/*}*/}

        </div>
    );
};

export default AllFoodComponent;

import Listbottom from '../../../components/admin/footer';
import Blankbox from '../../../public/img/box.png';
import { prisma } from '../../lib/prisma';
import { revalidatePath } from "next/cache";
import { ListViewType } from '@/app/lib/_type';

async function createTask(formData:FormData) {
    "use server"

    const name = formData.get("name") as string;
    const rating = Number(formData.get("rating"));
    const comment = formData.get("comment") as string;

    await prisma.review.create({
        data: {
        name,
        rating,
        comment,
        },
    });

    revalidatePath("/admin/reviews")
}

export default async function AdminReview() {
    "use cache"
    const myList: ListViewType[] = await prisma.review.findMany( {
        select:{
            id: true,
            name: true,
            comment: true,
            rating: true,
        }
    })

    return (
        <div className="flex justify-center items-start pl-3 pr-3 pt-5 pb-20 w-full gap-3">
            <section className=" w-[70%] md:border  md:border-[#000000]/20 md:rounded-xl overflow-hidden">

                <header className='hidden md:block  text-[13px] border-b border-[#000000]/20 h-13 flex justify-between items-center pl-3 pr-3 font-[Valley] text-[#000000]/60'>
                    <span className='w-[10%]'>Id</span>
                    <span className='w-[20%]'>Name</span>
                    <span className='w-[50%]'>Comment</span>
                    <span className='w-[10%] flex justify-center'>Rating</span>
                    <span></span>
                </header>

                {/* Main List Container */}
                <div className='hidden md:flex flex flex-col'>
                    {
                        myList.length === 0 ? (
                            <div className='w-full flex flex-col justify-center items-center pt-10 pb-10 font-[Valley]'>
                                <img src={Blankbox.src} className='w-10'/>

                                <p className='text-[15px] mt-5'>Empty in the review</p>
                                <span className='text-[13px] text-[#000000]/60'>Start to take a review from learner or member</span>
                            </div>
                        ) : (
                            <div className=" flex flex-col">
                                {myList.slice(0, 21).map((item, index) => (
                                    <div
                                        key={item.id}
                                        className=" p-3 font-[Valley] flex items-start h-20  border-b border-[#000000]/20"
                                    >
                                        <span className='text-[13px] font-[Valley] w-[10%] text-[#000000]/60'>{index < 10 ? "0" + (index+1) : index}</span>
                                        <h3 className='text-[14px] w-[20%] font-[Recursive] h-full text-[#000000]/80 font-bold'>{item.name}</h3>
                                        <p className='text-[13px] text-[#000000]/60 w-[50%] h-full'>{item.comment}</p>
                                        <span className='w-[10%] flex justify-center h-ful text-[13px] font-[Valley] text-[#000000]/60'>{item.rating}/10</span>
                                    </div>
                                ))}
                            </div>
                        )
                    }
                </div>

                <div className='border border-[#000000]/20 rounded-xl md:hidden flex flex-col'> {/* mobile view */}
                    {
                        myList.length === 0 ? (
                            <div className='w-full flex flex-col justify-center items-center pt-10 pb-10 font-[Valley]'>
                                <img src={Blankbox.src} className='w-10'/>

                                <p className='text-[15px] mt-5'>Empty in the review</p>
                                <span className='text-[13px] text-[#000000]/60'>Start to take a review from learner or member</span>
                            </div>
                        ) : (
                            <div className="  flex flex-col mt-2">
                                {myList.slice(0, 21).map((item, index) => (
                                    <div
                                        key={item.id}
                                        className="border-b border-b-[#000000]/20 flex flex-col p-5 w-auto "
                                    >
                                        <div className="flex justify-between border-b pb-2 border-b-[#000000]/20">
                                            <span className='text-[13px] font-[Valley] w-[10%] text-[#000000]/60'>{index < 10 ? "0" + (index+1) : index}</span>
                                            <h3 className='text-[14px]  font-[Recursive] h-full text-[#000000]/80 font-bold w-full items-center justify-center text-center'>{item.name}</h3>
                                           <span className='  text-[13px] font-[Valley] text-[#000000]/60'>{item.rating}/10</span>
                                        </div>

                                        <p className='mt-2 flex justify-center w-full text-[13px] text-[#000000]/60 w-[50%] h-full'>{item.comment}</p>
                                    </div>
                                ))}
                            </div>
                        )
                    }
                </div> {/* mobile view end */}

                <Listbottom />
            </section>




            <section className="hidden md:block pb-5 w-[30%] border border-[#000000]/20 rounded-xl flex flex-col items-center">
                <header className="flex gap-5 border-b h-15 border-[#000000]/20 w-full items-center justify-center">
                    <span className="flex justify-center items-center w-10 h-10 rounded-xl text-[#ffffff] text-[30px] bg-orange-400 shadow-xs shadow-orange-600">+</span>
                    <div className="flex flex-col">
                        <h3 className="text-[15px] font-[Recursive] font-bold">Add a review</h3>
                        <h3 className="text-[12px] font-[Valley]">Share a review from member</h3>
                    </div>
                </header>

                <form action={createTask} className="w-full p-5 font-[Valley]">
                    <h3 className="text-[13px]">Name</h3>
                    <input name='name' type="text" placeholder="Enter a name" className="focus:ring-orange-400 focus:ring focus:outline-none border border-[#000000]/20 w-full h-10 mt-2 pl-3 text-[13px] rounded-md"/>

                    <h3 className="text-[13px] mt-5">Comment</h3>
                    <textarea name='comment' placeholder="Write the review here" className="focus:ring-orange-400 focus:ring focus:outline-none border resize-none w-full h-40 border-[#000000]/20 mt-2 text-[13px] pl-3 pt-3 rounded-md"></textarea>

                    <h3 className="text-[13px] mt-5">Rate</h3>
                    <input name='rating' type="text" placeholder="Rate between 1 - 10" className="focus:ring-orange-400 focus:ring focus:outline-none border border-[#000000]/20 w-full h-10 mt-2 pl-3 text-[13px] rounded-md"/>

                    <h3 className="text-[13px] mt-5">Event <span className="text-[#000000]/60">( optional )</span></h3>
                    <input type="text" placeholder="Event name" className="focus:ring-orange-400 focus:ring focus:outline-none border border-[#000000]/20 w-full h-10 mt-2 pl-3 text-[13px] rounded-md"/>

                    <h3 className="text-[13px] mt-5">Status</h3>
                    <div className="flex gap-3 mt-3">
                        <li className="list-none text-[13px] flex justify-center items-center gap-1">
                            <input type="checkbox" className="accent-orange-400"/>
                            <span>Approved</span>
                        </li>
                        <li className="list-none text-[13px] flex justify-center items-center gap-1">
                            <input type="checkbox" className="accent-orange-400"/>
                            <span>Pending</span>
                        </li>
                        <li className="list-none text-[13px] flex justify-center items-center gap-1">
                            <input type="checkbox" className="accent-orange-400"/>
                            <span>Reject</span>
                        </li>
                    </div>

                    <button className="text-[13px] bg-orange-500 hover:bg-orange-400 pt-1 pb-1 text-[#ffffff] w-full mt-5 rounded-md cursor-pointer">Create Review</button>
                </form>
            </section>

             {/* mobile add review*/ }

             <section className=" md:hidden lg:hidden p-1 pb-5 max-w-[75%] w-[70%] border border-[#000000]/20 rounded-xl flex flex-col items-center mx-auto">
                <header className="justify-start px-3 mb-6 flex gap-5 border-b h-15 border-[#000000]/20 w-full items-center ">
                    <span className="flex justify-center items-center  px-3 -pb-1 rounded-xl text-[#ffffff] text-[2rem] bg-orange-400 ">+</span>
                    <div className="flex flex-col ">
                        <h3 className="text-[15px] font-[Recursive] font-bold">Add a review</h3>
                        <h3 className="text-[12px] font-[Valley]">Share a review from member</h3>
                    </div>
                </header>

                <form action={createTask} className="w-full p-5 font-[Valley]">
                    <h3 className="text-[13px]">Name</h3>
                    <input name='name' type="text" placeholder="Enter a name" className="focus:ring-orange-400 focus:ring focus:outline-none  border border-[#000000]/20 w-full h-10 mt-2 pl-3 text-[13px] rounded-md"/>

                    <h3 className="text-[13px] mt-5">Comment</h3>
                    <textarea name='comment' placeholder="Write the review here" className="focus:ring-orange-400 focus:ring focus:outline-none border resize-none w-full h-40 border-[#000000]/20 mt-2 text-[13px] pl-3 pt-3 rounded-md"></textarea>

                    <h3 className="text-[13px] mt-5">Rate</h3>
                    <input name='rating' type="text" placeholder="Rate between 1 - 10" className="focus:ring-orange-400 focus:ring focus:outline-none border border-[#000000]/20 w-full h-10 mt-2 pl-3 text-[13px] rounded-md"/>

                    <h3 className="text-[13px] mt-5">Event <span className="text-[#000000]/60">( optional )</span></h3>
                    <input type="text" placeholder="Event name" className="focus:ring-orange-400 focus:ring focus:outline-none border border-[#000000]/20 w-full h-10 mt-2 pl-3 text-[13px] rounded-md"/>

                    <h3 className="text-[13px] mt-5">Status</h3>
                    <div className="flex gap-3 mt-3">
                        <li className="list-none text-[13px] flex justify-center items-center gap-1">
                            <input type="checkbox" className="accent-orange-400 text-white"/>
                            <span>Approved</span>
                        </li>
                        <li className="list-none text-[13px] flex justify-center items-center gap-1">
                            <input type="checkbox" className="accent-orange-400"/>
                            <span>Pending</span>
                        </li>
                        <li className="list-none text-[13px] flex justify-center items-center gap-1">
                            <input type="checkbox" className="accent-orange-400" />
                            <span>Reject</span>
                        </li>
                    </div>

                    <button className="text-[13px] bg-orange-500 justify-center flex items-center   text-[#ffffff] py-3 w-full mt-5 rounded-md cursor-pointer hover:bg-orange-400">Create Review</button>
                </form>
            </section>

            {/* mobile add review */}

        </div>
    )
}

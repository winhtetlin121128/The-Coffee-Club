
import type { Ref } from "react";
import Cover from '../../public/img/Intro.png';

// const { photo1, photo2, photo3, photo4 } = viewers;
// const view = [photo1, photo2, photo3, photo4];

interface HomePageProps {
    HomeRef: Ref<HTMLDivElement>;
}

const HomePage = ({HomeRef} : HomePageProps) => {
    return (
        <div ref={HomeRef} className="flex w-full justify-center items-center pt-10">
            <div className="w-full lg:w-320 flex flex-col lg:flex-row justify-center pt-20 border-b border-[#000]/20 pb-20">
                {/* TextSide */}
                <section 
                className="w-full flex flex-col items-center lg:items-start lg:w-[40%] text-[12px] pt-1">
                    <span className="pl-4 pr-4 pt-2 pb-2 rounded-3xl font-[Recursive] text-[#000]/60 border border-[#000]/20 flex gap-2 w-fit flex justify-center items-center"><span className='greenball text-green-600 w-2 h-2 bg-[#009688] rounded-3xl'></span>EDUCATION COMMUNITY : MYANMAR</span>

                    {/* Main Pargraph */}
                    <div className="flex flex-col mt-10 lg:pl-5 lg:border-l lg:border-orange-400 pt-5 pb-5">
                        <h3 className="font-[Recursive] font-400 text-[25px] text-center lg:text-start">Empowering Students to Learn, Connect, and Grow Beyond Boundaries</h3>
                        <p className="text-[15px] text-[#000]/60 p-3 mt-1 font-[Valley] text-center lg:text-start">Access world-class educational resources, join active student communities,
                            and participate in events designed to build your future.
                        </p>

                        <div className="mt-10 gap-2 flex justify-center lg:justify-start text-[13px] font-[Valley]">
                            <button className="border border-[#000]/20 pl-3 pr-3 pt-1 pb-1 rounded-3xl hover:bg-[#000] hover:text-[#fff] cursor-pointer transition duration-200">Follow on Facebook</button>
                            <button className="border border-[#000]/20 pl-3 pr-3 pt-1 pb-1 rounded-3xl hover:bg-[#000] hover:text-[#fff] cursor-pointer transition duration-200">Join our Telegram group</button>
                        </div>
                    </div>

                    <div className='flex mt-5 ml-8'>
                        {/* {
                            view.map((element, index) => {
                                return (
                                    <li key={index} className='w-9 h-9 rounded-[50px] list-none border border-[#000]/20 -ml-2 overflow-hidden'>
                                        <img src={element.src} className=''/>
                                    </li>
                                )
                            })
                        } */}

                        <div className='hidden lg:flex flex-col ml-5 font-[Valley] w-full items-start'>
                            <span className='text-[15px] font-bold'>1k +</span>
                            <span>Active Learners</span>
                        </div>
                    </div>
                </section>

                {/* ImageSide */}
                <section 
                className="hidden w-[60%] lg:flex justify-center pl-20 items-start">
                    <img src={Cover.src} className='w-110'/>
                </section>
            </div>
        </div>
    )
}

export default HomePage
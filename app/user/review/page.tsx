
export default async function UserReview() {
    return(
      <div className="flex flex-col justify-center items-center my-20 bg-white ">
          
          <div className="bg-white flex px-2 py-1 border border-[#5b5045] rounded-full ">
            <span></span>
            <p className="font-[valley] text-[0.5rem] font-bold text-[#5b5045]">YOUTH ENGLISH CONVERSATION COMMUNITY</p>
          </div>

          <p className="text-[#3d2b1b] text-[2rem] mt-3 font-bold  ">The Coffee Club </p>
          <p className="mt-2 text-center max-w-[45%] font-[valley] text-[0.6rem] font-medium text-[#8c6039] ">Helping young minds connect, express, and speak English with 
            confidence over warm coffee
          </p>

           
          <div className="flex flex-col justify-center items-start md:mx-[20%] mx-[10%] mt-4 px-6 pt-5 md:border md:border-[#efefef] md:rounded-xl md:shadow-xl ">   {/*  card */}
   
            <p className="font-[valley] text-[1.2rem] font-bold text-[#3d2b1b]">Share Your Experience</p>
            <p className="font-[valley] text-[0.6rem] font-medium text-[#5b5045]/90 ">Your feedback helps us create better learning circles for youths.</p>

           <hr/>

    <div className="w-full max-w-[90%] space-y-6 mx-auto">

                 <div className="mt-5">
                    <label className="text-[0.7rem] font-bold text-[#3B2613] my-2">FULL NAME </label>
                   <input type="text" className=" mt-3 w-full pl-5 pr-4 py-3 bg-[#f7f4ef]/60 border-[#3B2613]/80 border rounded-xl text-[0.7rem] 
                          text-[#2d241e] placeholder:text-[0.7rem] placeholder:text-[#b0a69d] focus:outline-none focus:ring-2 focus:ring-[#3b2613]/20
                           focus:border-[#3b2612] transition"  placeholder="e.g.Bo Bo"/>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                    <label className="text-[0.7rem] font-bold text-[#3B2613] my-2">STUDENT ID (OPTIONAL)</label>
                   <input type="text" className=" mt-3 w-full pl-5 pr-4 py-3 bg-[#f7f4ef]/60 border-[#3B2613]/80 border rounded-xl text-[0.7rem] 
                          text-[#2d241e] placeholder:text-[0.7rem] placeholder:text-[#b0a69d] focus:outline-none focus:ring-2 focus:ring-[#3b2613]/20
                           focus:border-[#3b2612] transition" placeholder="e.g. TCC-8821"/>
                   </div>

                   <div>
                    <label className="text-[0.7rem] font-bold text-[#3B2613] my-2">EMAIL ADDRESS</label>
                   <input type="email" className=" mt-3 w-full pl-5 pr-4 py-3 bg-[#f7f4ef]/60 border-[#3B2613]/80 border rounded-xl text-[0.7rem] 
                          text-[#2d241e] placeholder:text-[0.7rem] placeholder:text-[#b0a69d] focus:outline-none focus:ring-2 focus:ring-[#3b2613]/20
                           focus:border-[#3b2612] transition" placeholder="name@example.com"></input>
                   </div>
                 </div>

              <div>
                <label className="text-[0.7rem] font-bold text-[#3B2613] my-2">EVENT / SESSION ATTENDED</label>
              <input type="text" className=" mt-3 w-full pl-5 pr-4 py-3 bg-[#f7f4ef]/60 border-[#3B2613]/80 border rounded-xl text-[0.7rem] 
                          text-[#2d241e] placeholder:text-[0.7rem] placeholder:text-[#b0a69d] focus:outline-none focus:ring-2 focus:ring-[#3b2613]/20
                           focus:border-[#3b2612] transition" placeholder="event"/>
              </div>

           </div> {/*  end input section*/ }

           <p className="text-xs mt-3 px-2 font-medium text-[#5b5045] w-full  max-w-[90%] mx-auto">Weekly Conversation Circle • Public Speaking & Debate • Topic Discussion & Board Games 
            • Vocabulary & Accent Workshop • Special Youth Event
           </p>

           <div className=' w-full  max-w-[90%] mx-auto'>{/*  rating */}

                <div className="flex  font-bold text-[0.7rem] mt-3  justify-between">
                <p className="text-[0.7rem] font-bold text-[#3B2613] my-2">OVERALL RATING</p>
                <p className="text-[0.7rem] font-bold text-[#3B2613] my-2">Select stars</p>
            </div>

            <input className=" mt-3 w-full pl-5 pr-5 mr-4 py-3 bg-[#f7f4ef]/60 border-[#3B2613]/80 border rounded-xl text-[0.7rem] 
                          text-[#2d241e] placeholder:text-[0.7rem] placeholder:text-[#b0a69d] focus:outline-none focus:ring-2 focus:ring-[#3b2613]/20
                           focus:border-[#3b2612] transition" type="text" placeholder="rating 1-10"/>

           </div> {/* rating end*/}

           <div className="w-full max-w-[90%] mx-auto mt-3">
            <label className="text-[0.7rem] font-bold text-[#3B2613] my-2">YOUR FEEDBACK AND EXPERIENCE</label>
           <textarea className="text-start mt-3 w-full pl-5 pr-5 mr-4 py-3 bg-[#f7f4ef]/60 border-[#3B2613]/80 border rounded-xl text-[0.7rem] 
                          text-[#2d241e] placeholder:text-[0.7rem] placeholder:text-[#b0a69d] focus:outline-none focus:ring-2 focus:ring-[#3b2613]/20
                           focus:border-[#3b2612] transition"  rows="4" required placeholder="How was the conversation flow, topic, and club atmosphere?  Share your thoughts..."/>
           </div>

            <div className="w-full max-w-[90%] mx-auto mt-4 rounded-xl flex items-center justify-center">
                <button type="submit" className="w-full bg-[#3b2613] rounded-lg py-2 hover:bg-[#3b2613]/90 "><span className="font-bold text-[0.7rem] text-white ">Submit Review</span><span className="font-bold text-[0.7rem] text-white ml-1">&rarr;</span> </button>
            </div>

            <p className="mt-6 text-center text-xs text-[#9c9187] mb-10 mx-auto">Your voice helps make every conversation better</p>

          </div>  {/*  end card */}

          <div className="mt-10 w-full">
            <hr className="mt-6 text-black/80 my-5"></hr>

          <p className="my-10 mt-6 text-center text-xs text-[#9c9187] mb-10 mx-auto">© 2026 The Coffee Club. Empowering Youth Voice & Community.</p>
          </div>
      </div>
    ); 
}
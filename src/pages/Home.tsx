//Home 
import traveler from '../assets/images/Traveller 1.png';
import flights from '../assets/images/flights.png';
import weather from '../assets/images/weather.png';
import events from '../assets/images/events.png';
import customization from '../assets/images/customization.png';
import navigation from '../assets/images/Navigation.png'
import selection from '../assets/images/selection 1.png';
import water from '../assets/images/water-sport 1.png';
import taxi from '../assets/images/taxi 1.png';
import { useState } from 'react';
import card from '../assets/images/card.png';
import profile from '../assets/images/profile.png';
import logos from '../assets/images/logos.png'
import send from '../assets/images/send.png';
import mail from '../assets/images/mail.png';
const Home = ()=>{
    const [isHovered, setHovered] = useState<number | null>(null);
    const [select, setSelected] = useState<number | null>(null);
    return(
        <section className='lg:px-30 px-5'>
        <div className="grid lg:grid-cols-2 grid-cols-1 relative">
            {/* Grid 1: Text Section */}
            <div className="flex flex-col gap-4 py-10 px-6 lg:py-20">
                <p className="text-[16px] lg:text-[20px] font-bold text-[#DF6951]">
                BEST DESTINATIONS AROUND THE WORLD
                </p>
                <h1 className="text-[30px] lg:text-[84px] font-bold leading-tight lg:leading-[100px] max-w-[545px]">
                Travel, enjoy and live a new and full life
                </h1>
                <p className="text-[#5E6282] font-medium text-left max-w-[477px] text-[15px] lg:text-base">
                Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start sm:items-center mt-4">
                <button className="bg-[#FF9500] px-6 sm:px-10 h-[45px] sm:h-[50px] text-white rounded-lg text-sm sm:text-base transition-all duration-[1s] hover:bg-[#FF9500]/70">
                    Find out more
                </button>
                <div className="flex items-center gap-4">
                    <button className="w-10 h-10 rounded-full bg-[#DF6951] flex items-center justify-center transition-all duration-1000 hover:bg-[#DF6951]/80">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-white ml-1"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </button>
                    <p className="text-[#686D77] text-[16px]">Play Demo</p>
                </div>
                </div>
            </div>

            {/* Grid 2: Image Section */}
            <div className="relative mt-10 lg:mt-0">
                <img
                className="w-full max-w-[500px] mx-auto lg:absolute lg:right-0 lg:top-10 z-10"
                src={traveler}
                alt="traveler"
                aria-label="traveler"
                />
            </div>
            </div>
            {/**services */}
            <div className="lg:py-30 py-15">
                <header className="text-center flex flex-col gap-5">
                    <p className="text-[#5E6282] text-[18px]">CATEGORY</p>
                    <h1 className="text-[50px] font-bold">We Offer Best Services</h1>
                </header>

                <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-10 gap-5 py-20 flex-wrap">
                    {[
                    {
                        id: 1,
                        title: "Calculated Weather",
                        text: "Built Wicket longer admire do barton vanity itself do in it.",
                        icon: weather,
                    },
                    {
                        id: 2,
                        title: "Best Flights",
                        text: "Built Wicket longer admire do barton vanity itself do in it.",
                        icon: flights,
                    },
                    {
                        id: 3,
                        title: "Local Events",
                        text: "Built Wicket longer admire do barton vanity itself do in it.",
                        icon: events,
                    },
                    ].map((s) => (
                    <div
                        key={s.id}
                        className="rounded-3xl max-w-[340px] px-6 py-10 bg-white border border-gray-200 hover:border-[#DF6951] shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out text-center flex flex-col items-center gap-5"
                    >
                        <img src={s.icon} alt={s.title} aria-label={s.title} className="w-16 h-16" />
                        <h3 className="font-semibold text-[#1E1D4C] text-xl">{s.title}</h3>
                        <p className="text-[#5E6282] text-[16px]">{s.text}</p>
                    </div>
                    ))}
                </div>
                </div>
            {/**top selling */}
            <div>
                <header className='text-center flex flex-col gap-5'>
                    <p className='text-[#5E6282] text-[18px]'>Top Selling</p>
                    <h1 className='text-[50px] font-bold'>Top Destinations</h1>
                </header>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-20 py-20'>
                    {[
                        {id:1, location:"Rome, Italy", price:"1.32k", trip:10, thumbnail:"https://res.cloudinary.com/dhv4wd0ap/image/upload/v1747935544/licensed-image_c0ulxo.jpg"},
                        {id:2, location:"London, Uk", price:"2k", trip:12, thumbnail:"https://res.cloudinary.com/dhv4wd0ap/image/upload/v1747935536/AC9h4nqkKl5RKdwBD9gIfghRZ05142pS-RcWPCDqkY-Xp13CO5SVv-NexBlsPJw7jSIbaXHQT0YpPN7L-eGnTRRKNvQJTZkKgJb9vt-M9a7UUHoIoHqNJRnfs68iGQSgImjUj8Eq47dXxQ_w1080-h624-n-k-no_tlvvmw.jpg"},
                        {id:3, location:"Full, Europe", price:"12k", trip:15, thumbnail:"https://res.cloudinary.com/dhv4wd0ap/image/upload/v1747935521/AC9h4nqS_Ov-40JN5xrtjHjWaRyUogdZYnqor1woHFoWEAGhbB17LPVc7XuHwwz6GN-NbKdD6gXtHDSMIo8f3NRIN8DNVsaDYAyYHOU31TxpedTDu71U_3ZNy5NriDoXHIOYIGQn_MC1_w1080-h624-n-k-no_yui8ob.jpg"},
                    ].map((s)=>(
                        <div onMouseLeave={()=>setHovered(null)} onMouseEnter={()=>setHovered(s.id)} key={s.id} className={`w-[314px] h-[457px] rounded-2xl shadow shadow-lg overflow-hidden transition-all duration-[1s] hover:shadow-2xl ${isHovered === s.id ? 'hover:origin-center' : 'scale-100 origin-center'}`}>
                            <div className='w-full h-[70%] bg-red-200 rounded-2xl'>
                                <img className={`object-cover w-full h-full rounded-t-2xl transition-all duration-[1s] hover:scale-110`} src={s.thumbnail} alt={s.location} aria-label={s.location} />
                            </div>
                            <div className='px-5 flex items-center justify-between text-[16px] text-[#5E6282] px-5 py-5'>
                                <p>{s.location}</p>
                                <p>{s.price}</p>
                            </div>
                            <div className='flex gap-1 px-5'>
                                <img src={navigation} alt={navigation} aria-label={navigation} />
                                <p className='text-[#5E6282]'>{s.trip} days trip</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            {/***book next trip */}
            <div className='grid lg:grid-cols-2 grid-rows-auto py-20 lg:px-20 px-3 gap-20'>
                <div className='lg:w-[511px] flex flex-col gap-5'>
                    <header>
                        <p className='text-[#5E6282] text-[16px]'>Easy and fast</p>
                        <h1 className='text-[#14183E] text-[50px] font-bold'>Book Your Next Trip In 3 Easy Steps</h1>
                    </header>
                    <div className='flex flex-col gap-10'>
                        {[
                            {id:1, step:"Choose Your Destination", context:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.", icon:selection, color:"#F0BB1F"},
                            {id:2, step:"Make Payment", context:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.", icon:water, color:"#F05A2A"},
                            {id:3, step:"Reach Airport on Selected Date", context:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.", icon:taxi, color:"#016380"},
                        ].map((b)=>(
                            <div key={b.id} className='flex lg:flex-row flex-col lg:gap-6 gap-2'>
                                <div style={{backgroundColor: `${b.color}`}} className=' w-15 lg:w-18 h-15 rounded-xl flex items-center justify-center'>
                                    <img src={b.icon} alt={b.step} aria-label={b.step} />
                                </div>
                                <div className='flex flex-col'>
                                    <h3 className='text-[#5E6282] font-bold text-[16px]'>{b.step}</h3>
                                    <p className='text-[#5E6282] text-[16px]'>{b.context}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <img src={card} alt="card" aria-label='card' />
                </div>
            </div>
            {/**testimonials */}
            <div className='flex lg:flex-row flex-col lg:gap-50 gap-16'>
                <div>
                    <header className="lg:w-[409px]">
                        <p className='text-'>Testimonials</p>
                        <h1 className='text-[50px] font-bold text-[#14183E]'>What People Say About Us</h1>
                    </header>
                    <div className="mt-10 flex gap-7">
                        {Array.from({ length: 3 }).map((_, idx) => (
                            <label key={idx} className="cursor-pointer">
                                <input
                                    type="radio"
                                    name="option"
                                    value={idx}
                                    className="peer hidden"
                                    checked={select === idx}
                                    onChange={() => setSelected(idx)}
                                />
                                <div className="lg:w-6 lg:h-6 w-3 h-3 rounded-full border-2 border-gray-400 peer-checked:bg-black transition-colors duration-200" />
                            </label>
                        ))}
                    </div>
                </div>
                <div className='relative flex flex-col py-16 text-[#5E6282]'>
                    <div className='w-20 h-20 rounded-full absolute top-0 left-0'>
                        <img className='object-cover' src={profile} alt="profile picture" aria-label='profile picture' />
                    </div>
                    <div className='max-w-[504px] max-h-[245px] bg-white shadow shadow-lg px-10 py-10 rounded rounded-xl'>
                        <p className='text-[#5E6282]'>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                        <div className='mt-10'>
                            <p className='text-[#5E6282] text-[18px] font-semibold'>Mike Taylor</p>
                            <p className='text-[14px]'>United States</p>
                        </div>
                    </div>
                </div>
            </div>
            {/**logos */}
            <div>
                <img className='hidden lg:flex' src={logos} alt="logos" aria-label='logos' />
            </div>
            {/**newsletter */}
            <div className='relative py-10 gap-30'>
                <img className='absolute top-0 right-0' src={send} alt="send icon" aria-label='send icon' />
                <div className='bg-[#6246E5]/10 min-h-[407px] rounded-t-[50px] lg:px-20 lg:py-20 px-5 py-5'>
                    <p className='text-[33px] text-[#5E6282] text-center font-semibold'>
                    Subscribe to get information, latest news and other interesting offers about Jadoo
                    </p>

                    <form className='flex flex-wrap items-center justify-center mt-10  gap-10'>
                        {/* Wrapper to position mail icon inside input */}
                        <div className="relative">
                            <img
                            className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5'
                            src={mail}
                            alt="mail icon"
                            aria-label='mail icon'
                            />
                            <input
                            className='max-w-[421px] h-[68px] bg-white pl-12 pr-4 rounded-[10px] focus:outline-none'
                            type="text"
                            placeholder='Your Email'
                            />
                        </div>
                        <button className='w-[180px] h-[68px] bg-gradient-to-t  from-[#FF8D6B] to-[#FF836A] text-white rounded-[10px]'>Subscirbe</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Home
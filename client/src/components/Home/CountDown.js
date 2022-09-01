import React, { useEffect, useState } from 'react';

const CountDown = () => {
    var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
    const [days, setDay] = useState(0);
    const [hours, setHour] = useState(0);
    const [minutes, setMinute] = useState(0);
    const [seconds, setSecond] = useState(0);
    const mainTime = setInterval(function () {
        const now = new Date().getTime();
        const diff = countDownDate - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        setDay(days);
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        setHour(hours);
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        setMinute(minutes);
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setSecond(seconds);
    }, 1000);
    const times = [
        {
            id: 1,
            time: days,
            name: "Days"
        },
        {
            id: 2,
            time: hours,
            name: "Hours"
        },
        {
            id: 3,
            time: minutes,
            name: "Minutes"
        },
        {
            id: 4,
            time: seconds,
            name: "Seconds"
        }
    ]
    return (
        <div>
            <div className="w-full max-w-3xl mx-auto">
                <div className="shadow-lg shadow-gray-500 border-4 border-green-700 p-5 rounded">
                    <div className="grid grid-cols-12">
                        <div className='flex items-center col-span-12 sm:col-span-7 mx-auto'>
                            {times.map(time => (
                                <div key={time.id}>
                                    <div className='w-[70px] mr-3 sm:mr-8'>
                                        <div className='relative'>
                                            <div className='w-[65px] rounded h-6 shadow-md bg-red-600'></div>
                                            <div className='w-[65px] rounded h-6 shadow-md bg-red-600'></div>
                                            <div className='absolute top-2/4 left-2/4 t -translate-x-2/4 -translate-y-2/4 text-4xl font-medium text-white'>
                                                {time.time}
                                            </div>
                                        </div>
                                        <p className='text-xs font-medium text-center'>{time.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='col-span-12 mt-6 sm:mt-0 sm:col-span-5'>
                            <button className='bg-green-700 border-2 border-green-800 text-md font-medium w-full h-12 block shadow-md rounded-md text-white uppercase'>Registration Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountDown;
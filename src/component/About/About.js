import React from 'react';

const About = () => {
    return (
        <div className='text-center'>
<center> <a href="#" class=" flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={'https://avatars.githubusercontent.com/u/106336254?v=4'} alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Takibu Hasan Mirza.</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">I am a Electrical Engineer and Web developer.</p>
                </div>
            </a></center>
           

        </div>
    );
};

export default About;
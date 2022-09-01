import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { GrYoutube } from 'react-icons/gr';
export const links = [
    {
        id: 1,
        link: <a className='flex items-center justify-center bg-white text-green-600 p-1 rounded-sm mr-1' href="/"><FaFacebookF /></a>
    },
    {
        id: 2,
        link: <a className='flex items-center justify-center bg-white text-green-600 p-1 rounded-sm mr-1' href="/"><AiOutlineTwitter /></a>
    },
    {
        id: 3,
        link: <a className='flex items-center justify-center bg-white text-green-600 p-1 rounded-sm mr-1' href="/"><AiOutlineInstagram /></a>
    },
    {
        id: 4,
        link: <a className='flex items-center justify-center bg-white text-green-600 p-1 rounded-sm mr-1' href="/"><FaLinkedinIn /></a>
    },
    {
        id: 5,
        link: <a className='flex items-center justify-center bg-white text-green-600 p-1 rounded-sm mr-1' href="/"><GrYoutube /></a>
    }
]
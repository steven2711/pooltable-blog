import {useRouter} from 'next/router'


export default function GoBackBtn() {

    const router = useRouter()

    return <button onClick={() => router.back()} className='cursor-pointer uppercase hover:text-indigo-300 text-xl ml-10'>go back</button>
}

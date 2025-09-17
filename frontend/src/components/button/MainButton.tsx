
export default function MainButton({ text }: { text: string }) {
    return (
        <button className='bg-[#b0ec2c] hover:bg-[#99d01f] p-2 font-bold transition-all duration-300 text-black px-4 py-2 rounded-md'>{text}</button>
    )
}

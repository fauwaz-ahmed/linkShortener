import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";




export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[66vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-3xl font-bold ">
            The Ultimate Link Shortening Tool
          </p>
          <p className="px-56 text-center">
           Tired of long, messy URLs? Our free link shortener transforms your lengthy links into clean, easy-to-share short URLs—perfect for social media, emails, and marketing campaigns. 
          </p>
          <div className='flex gap-3 justify-start'>
          <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-20 py-1 font-bold text-white'>Try Now</button></Link>
          {/* <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>GitHub</button></Link> */}
        </div>
        </div>
        <div className=" flex justify-start relative">
          <Image className="mix-blend-darken" alt="an Image of a vector" src={"/vector.jpg"} fill={true}    />
        </div>

      </section>
    </main>
  );
}

"use client"
import Image from "next/image";
/**
 * v0 by Vercel.
 
 */
import Link from "next/link"
 
import DynamicBackground from '@/components/DynamicBackground'; // Make sure to create this file
import Script from "next/script";
import Head from 'next/head';
import { IoMail , IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoIosMountain } from 'react-icons/io5';



export default function Component() {
  return (






    <div className="  relative min-h-screen flex flex-col items-center">

      <Head>
 
        <meta property="og:title" content="MIRÁ ESTO - Productora Audiovisual" />
        <meta
          property="og:description"
          content="MIRÁ ESTO - Productora Audiovisual"
        />
        <meta
          property="og:image"
          content="https://instagram.fluq5-1.fna.fbcdn.net/v/t51.29350-15/450622843_724659883060600_6669832520709434420_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMzUweDE2ODcuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.fluq5-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=6v9mlBEdIC0Q7kNvgGe925A&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzQwODYzMTkxNDYzMzUwMjM2Mg%3D%3D.2-ccb7-5&oh=00_AYBAAZpS4cQ0tF8HWyKMCTGyfD7FXGRjbUQteJ6r-iF9qQ&oe=6693C333&_nc_sid=8f1549"
        />
      </Head>


<Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{
          page_path: window.location.pathname,
          
});
         `}
      </Script>





<DynamicBackground rows={5} cols={4} /> {/* Add this line */}




 



 






      <div className="flex flex-col justify-center items-center m-12 sm:m-12 mb-12  ">

<div className="bg-white  w-[99%]  sm:w-[66%] rotate-1 rounded-lg mt-4 shadow-lg  border-8   border-[#34d399] rounded-xl overflow-hidden animate-border-color-change">
  <div className="p-2 sm:p-8 ">

    <h2 className=" text-xl sm:text-5xl text-slate-800 font-sans font-bold mb-1 text-center">MIRÁ ESTO  </h2>
    <h2 className="text-xl sm:text-2xl text-slate-800 font-sans font-bold mb-6 text-center">  Productora Audiovisual</h2>

    <p className="text-gray-700 text-base  text-center sm:text-xl font-mono">
    En nuestra productora, creemos que mirar es más que solo ver. Nos dedicamos a crear contenido visual que cuenta historias, despierta emociones y conecta personas. 🌟
    </p>

 










  </div>
</div>
</div>













<h3 className="text-6xl font-bold text-black text-center mt-12 md:mt-32 my-4 md:my-12">Querés trabajar con nosotros?</h3>



<div className="flex justify-center mb-20">
      <Link   href="mailto:miraesto2023@gmail.com">
        <p className="bg-black text-2xl  text-[#f0abfc] font-semibold py-3 px-6 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-300 transition duration-200 ease-in-out">
          Contacto
        </p>
      </Link>
    </div>

















      <main className="container  md:max-w-screen-7xl	 max-w-fit px-2 md:px-6 pb-12 flex-1">

      <div className="    mx-auto"> {/* Add this wrapper */}

        <div className="grid grid-cols-1  md:grid-cols-5 gap-8 md:gap-5  ">




 



























        </div>


        </div>


      </main>














      <footer className="bg-[#f0abfc]  rounded-xl text-slate-950 py-12 md:py-16  m-4">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
             
            <span className="text-slate-950 font-bold text-lg">MIRÁ ESTO - Productora Audiovisual</span>
          </div>
          <p className="text-sm font-mono leading-relaxed max-w-md">
          🔹 Manejo de redes.
          </p>

          <p className="text-sm font-mono leading-relaxed max-w-md">

🔹 Manejo de IA.
</p>

<p className="text-sm font-mono leading-relaxed max-w-md">

🔹 Creación de videos.
</p>



<p className="text-sm font-mono leading-relaxed max-w-md">

🔹 Edición de imágenes.

          </p>


          <p className="text-sm font-mono leading-relaxed max-w-md">

🔹 Tips para un mejor desempeño en la virtualidad.
          </p>


        </div>
        <div className="flex flex-col items-start ">
          <h3 className="text-slate-900 font-semibold mb-4">Links</h3>
          <nav className="space-y-2 flex flex-col items-start">
            <Link className="hover:text-yellow-900 px-1 font-mono transition-colors" href="#">
              Home
            </Link>
            <Link className="hover:text-yellow-900 px-1 font-mono transition-colors" href="#">
              Acerca de nuestro equipo
            </Link>
            <Link className="hover:text-yellow-900 px-1 font-mono transition-colors" href="#">
              Trabajos
            </Link>
            <Link className="hover:yellow-900 px-1 font-mono transition-colors" href="#">
              Artículos
            </Link>
            <Link className="hover:yellow-900 px-1 font-mono transition-colors" href="#">
              Contacto
            </Link>
          </nav>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-slate-900 font-semibold mb-4">Seguinos</h3>
          <div className="flex space-x-4">
            <Link className="hover:text-gray-200 transition-colors" href="mailto:miraesto2023@gmail.com">
              <IoMail  className="h-5 w-5" />
            </Link>
 
            <Link className="hover:text-gray-200 transition-colors" href="https://www.instagram.com/miraesto.c/">
              <IoLogoInstagram className="h-5 w-5" />
            </Link>
 
          </div>
        </div>
      </div>
    </footer>








 
    </div>
  )
}
  
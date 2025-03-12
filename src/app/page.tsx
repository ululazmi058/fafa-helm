// import Image from "next/image";

// export default function Home() {
//   return (
//     <>
//       <main className="container mx-auto text-center py-16 px-6">
//         <h1 className="text-4xl font-bold text-blue-700">Selamat Datang di Fafa Helm</h1>
//         <p className="text-lg text-gray-700 mt-4">
//           Toko helm berkualitas dengan berbagai pilihan terbaik untuk keselamatan Anda.
//         </p>

//         {/* Hero Image */}
//         <div className="mt-6 flex justify-center">
//           <Image src="/helm.jpg" alt="Helm Terbaik" width={600} height={400} className="rounded-lg shadow-lg"/>
//         </div>

//         {/* CTA Section */}
//         <div className="mt-8">
//           <a href="/product-service" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg shadow-md hover:bg-blue-700 transition">
//             Lihat Produk Kami
//           </a>
//         </div>
//       </main>
//     </>
//   );
// }




'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <header className="relative w-full h-screen flex items-center justify-center bg-gray-100">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}></div>
        <div className="relative z-10 text-center">
          <h1 className="font-nova text-5xl font-bold text-green-800">Wear Helmet, Comfort your Soul</h1>
          <p className="font-nova mt-2 text-lg text-lime-900">from a small district in Semarang, providing your safety in riding.</p>
          <Link href="/product-service" className="mt-4 inline-block bg-green-600 text-white py-2 px-6 rounded-lg">CHECK WHAT WE GOT</Link>
        </div>
      </header>      
          
      {/* Services Grid */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-semibold text-center">Our Product & Services</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {[
            { name: "Helmet", image: "/helmet.jpg" },
            { name: "Accessories", image: "/accessories.jpg" },
            { name: "Spare Part & Repairing", image: "/repairing.jpg" }
          ].map((service, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg text-center flex flex-col items-center">
              <Image src={service.image} width={300} height={200} alt={service.name} className="rounded-lg mb-4" />
              <h3 className="text-xl font-bold">{service.name}</h3>
              <p className="text-gray-600">Sample text for {service.name} service.</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 bg-gray-100 flex flex-col md:flex-row items-center">
        <Image src="/profile.jpg" width={300} height={300} alt="Profile" className="rounded-lg" />
        <div className="md:ml-8 mt-6 md:mt-0">
          <h2 className="text-3xl font-semibold">Who We Are</h2>
          <p className="mt-4 text-gray-600">A good brand, required a good history and track record.</p>
          <Link href="/about" className="mt-4 inline-block bg-green-600 text-white py-2 px-6 rounded-lg">LEARN MORE</Link>
        </div>
      </section>    
    </div>
  );
}

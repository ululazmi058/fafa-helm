import Image from "next/image";

export default function About() {
  return (
    <>
      <main className="container mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-blue-700 text-center">Tentang Kami</h1>
        <p className="text-lg text-gray-700 text-center mt-4">
          Fafa Helm adalah toko helm terpercaya yang menyediakan berbagai macam helm berkualitas tinggi 
          untuk keselamatan dan gaya berkendara Anda.
        </p>

        {/* Gambar */}
        <div className="mt-6 flex justify-center">
          <Image src="/about-helm.jpg" alt="Tentang Fafa Helm" width={600} height={400} className="rounded-lg shadow-lg"/>
        </div>

        {/* Visi & Misi */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-blue-700">Visi Kami</h2>
          <p className="text-gray-700 mt-2">
            Menjadi toko helm terbaik di Indonesia yang mengutamakan keamanan, kenyamanan, dan kepuasan pelanggan.
          </p>

          <h2 className="text-2xl font-bold text-blue-700 mt-6">Misi Kami</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
            <li>Menyediakan helm berkualitas tinggi dengan harga terjangkau.</li>
            <li>Memberikan pelayanan terbaik kepada pelanggan.</li>
            <li>Mengedukasi masyarakat tentang pentingnya keselamatan berkendara.</li>
          </ul>
        </section>
      </main>
    </>
  );
}




// "use client";

// import Image from "next/image";

// export default function AboutUs() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
//       <div className="max-w-4xl bg-white rounded-2xl shadow-lg p-8 text-center">
//         <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
//         <p className="text-gray-600 mb-6">
//           Welcome to our company! We are dedicated to providing the best services
//           to our customers with a focus on quality, innovation, and excellence.
//         </p>
//         <div className="relative w-64 h-64 mx-auto mb-6">
//           <Image
//             src="/images/about-us.jpg" 
//             alt="About Us Image"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-full"
//           />
//         </div>
//         <p className="text-gray-600">
//           Our team is composed of talented professionals who are passionate
//           about what they do. We strive to make a difference and create value
//           for our clients every day.
//         </p>
//       </div>
//     </div>
//   );
// }

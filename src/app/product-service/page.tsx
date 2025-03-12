import Image from "next/image";

const products = [
  { name: "Full Face Helmet", image: "/products/full-face.jpg" },
  { name: "Modular Helmet", image: "/products/modular.jpg" },
  { name: "Open Face Helmet", image: "/products/open-face.jpg" },
  { name: "Half Helmet", image: "/products/half.jpg" },
];

const services = [
  { name: "Pasang Kaca Helm", image: "/services/pasang-kaca.jpg" },
  { name: "Servis Helm", image: "/services/servis-helm.jpg" },
  { name: "Custom Helm", image: "/services/custom.jpg" },
  { name: "Pembersihan Helm", image: "/services/cleaning.jpg" },
];

export default function ProductsServices() {
  return (
    <>
      <main className="container mx-auto text-center py-16 px-6">
        <h1 className="text-4xl font-bold text-blue-700">Produk & Layanan</h1>
        <p className="text-lg text-gray-700 mt-4">
          Kami menyediakan berbagai jenis helm berkualitas dan layanan terbaik untuk Anda.
        </p>

        {/* Helmet Section */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-blue-600">Helmets</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={150}
                  className="rounded-lg mx-auto"
                />
                <h3 className="text-xl font-medium mt-4">{product.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Accessories Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-blue-600">Accessories</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={150}
                  className="rounded-lg mx-auto"
                />
                <h3 className="text-xl font-medium mt-4">{product.name}</h3>
              </div>
            ))}
          </div>
        </section>        

        {/* Services Section */}
        <section className="mt-22">
          <h2 className="text-2xl font-semibold text-blue-600">Services</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={200}
                  height={150}
                  className="rounded-lg mx-auto"
                />
                <h3 className="text-xl font-medium mt-4">{service.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

import Image from "next/image";

const teamMembers = [
  { name: "Ahmad", role: "CEO", image: "/team/ahmad.jpg" },
  { name: "Rina", role: "Marketing Manager", image: "/team/rina.jpg" },
  { name: "Budi", role: "Head of Sales", image: "/team/budi.jpg" },
  { name: "Siti", role: "Customer Support", image: "/team/siti.jpg" },
];

export default function Teams() {
  return (
    <>
      <main className="container mx-auto text-center py-16 px-6">
        <h1 className="text-4xl font-bold text-blue-700">Tim Kami</h1>
        <p className="text-lg text-gray-700 mt-4">
          Kami adalah tim profesional yang siap memberikan pelayanan terbaik untuk Anda.
        </p>

        {/* Team Members Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mx-auto"
              />
              <h2 className="text-xl font-semibold mt-4">{member.name}</h2>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

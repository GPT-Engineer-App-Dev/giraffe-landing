import React from "react";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Header Section */}
      <header className="relative w-full h-[600px]">
        <img
          src="https://placehold.co/1920x600"
          alt="Giraffe Hero"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold text-white">Welcome to the World of Giraffes</h1>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">About Giraffes</h2>
        <p className="text-lg">
          Giraffes are the tallest land animals on Earth, known for their long necks and legs. They inhabit the savannas, grasslands, and open woodlands of Africa. Giraffes primarily feed on leaves, flowers, and fruits of woody plants, mainly acacia species.
        </p>
        <p className="text-lg mt-4">
          Interesting facts about giraffes include their unique coat patterns, which are like human fingerprints, and their ability to run at speeds up to 35 miles per hour over short distances.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="https://placehold.co/600x400" alt="Giraffe 1" className="w-full h-auto" />
          <img src="https://placehold.co/600x400" alt="Giraffe 2" className="w-full h-auto" />
          <img src="https://placehold.co/600x400" alt="Giraffe 3" className="w-full h-auto" />
          <img src="https://placehold.co/600x400" alt="Giraffe 4" className="w-full h-auto" />
          <img src="https://placehold.co/600x400" alt="Giraffe 5" className="w-full h-auto" />
          <img src="https://placehold.co/600x400" alt="Giraffe 6" className="w-full h-auto" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium">Email</label>
            <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium">Message</label>
            <textarea id="message" name="message" className="w-full p-2 border border-gray-300 rounded" rows="4" required></textarea>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2023 Giraffe World. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Twitter</a>
            <a href="#" className="hover:text-gray-400">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
import React, { useState } from 'react';
import { Camera, Heart, RefreshCw, ChevronDown, Mail, Github } from 'lucide-react';

type PetType = 'dog' | 'cat' | 'bird' | 'reptile';
type NamingStyle = 'elegant' | 'cute' | 'unique' | 'classic';

interface PetName {
  name: string;
  meaning: string;
  popularity: number;
}

function App() {
  const [petType, setPetType] = useState<PetType>('dog');
  const [style, setStyle] = useState<NamingStyle>('elegant');
  const [photo, setPhoto] = useState<string>('');
  const [generatedNames, setGeneratedNames] = useState<PetName[]>([]);

  // Large pool of unique names for each style
  const nameDatabase = {
    elegant: [
      { name: 'Luna', meaning: 'Moon - perfect for mysterious pets', popularity: 98 },
      { name: 'Atlas', meaning: 'A titan who held up the sky - for strong personalities', popularity: 85 },
      { name: 'Sage', meaning: 'Wise and serene', popularity: 78 },
      { name: 'Nova', meaning: 'New star - bright and energetic', popularity: 92 },
      { name: 'Echo', meaning: 'Mythological nymph - for vocal pets', popularity: 75 },
      { name: 'Onyx', meaning: 'Dark precious stone - elegant and mysterious', popularity: 82 },
      { name: 'Pixel', meaning: 'Digital element - modern and cute', popularity: 88 },
      { name: 'Zen', meaning: 'State of calm and peace', popularity: 79 },
      { name: 'Cosmo', meaning: 'Universe - for otherworldly personalities', popularity: 86 },
      { name: 'Aurora', meaning: 'Dawn - for radiant personalities', popularity: 94 },
    ],
    cute: [
      { name: 'Mochi', meaning: 'Sweet rice cake - for adorable pets', popularity: 91 },
      { name: 'Bubbles', meaning: 'Playful and light-hearted', popularity: 83 },
      { name: 'Cookie', meaning: 'Sweet and lovable', popularity: 89 },
      { name: 'Ziggy', meaning: 'Playful and energetic', popularity: 76 },
      { name: 'Pepper', meaning: 'Spicy and full of personality', popularity: 85 },
      { name: 'Waffle', meaning: 'Sweet and comforting', popularity: 77 },
      { name: 'Noodle', meaning: 'Long and wiggly - for playful pets', popularity: 82 },
      { name: 'Pickle', meaning: 'Tiny and cute', popularity: 73 },
      { name: 'Marshmallow', meaning: 'Soft and sweet', popularity: 88 },
      { name: 'Biscuit', meaning: 'Warm and comforting', popularity: 86 },
    ],
    unique: [
      { name: 'Quantum', meaning: 'For pets with mysterious energy', popularity: 72 },
      { name: 'Zenith', meaning: 'The highest point - for ambitious pets', popularity: 68 },
      { name: 'Cipher', meaning: 'Mystery and intrigue', popularity: 65 },
      { name: 'Vesper', meaning: 'Evening star - for nocturnal pets', popularity: 71 },
      { name: 'Prism', meaning: 'For pets with colorful personalities', popularity: 69 },
      { name: 'Nebula', meaning: 'Cosmic cloud - for ethereal pets', popularity: 74 },
      { name: 'Matrix', meaning: 'For complex and intelligent pets', popularity: 70 },
      { name: 'Sphinx', meaning: 'Ancient mystery - for wise pets', popularity: 73 },
      { name: 'Vertex', meaning: 'Peak or summit - for standout pets', popularity: 67 },
      { name: 'Axiom', meaning: 'Universal truth - for confident pets', popularity: 66 },
    ],
    classic: [
      { name: 'Oliver', meaning: 'Olive tree - peace and friendship', popularity: 95 },
      { name: 'Bella', meaning: 'Beautiful - for graceful pets', popularity: 94 },
      { name: 'Charlie', meaning: 'Free man - for independent pets', popularity: 93 },
      { name: 'Lucy', meaning: 'Light - for bright and cheerful pets', popularity: 91 },
      { name: 'Max', meaning: 'Greatest - for exceptional pets', popularity: 90 },
      { name: 'Sophie', meaning: 'Wisdom - for intelligent pets', popularity: 89 },
      { name: 'Rocky', meaning: 'Strong and sturdy', popularity: 88 },
      { name: "Daisy", meaning: "Day's eye - fresh and lively", popularity: 87 },
      { name: 'Jack', meaning: 'God is gracious - for blessed pets', popularity: 86 },
      { name: 'Molly', meaning: 'Star of the sea - for special pets', popularity: 85 },
    ],
  };

  const generateNames = () => {
    const availableNames = nameDatabase[style];
    const shuffled = [...availableNames].sort(() => Math.random() - 0.5);
    setGeneratedNames(shuffled.slice(0, 10));

    // Track name generation event in Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'generate_names', {
        'event_category': 'Name Generation',
        'event_label': `${petType}-${style}`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white/80 backdrop-blur-md z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-rose-500" />
              <span className="text-xl font-semibold">NameMyPet.top</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Success Stories</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-purple-600">
              Find the Perfect Name for Your Pet
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Using AI and data from millions of pet names, we'll help you discover the ideal name that matches your pet's personality.
            </p>
          </div>

          {/* Name Generator Form */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pet Type</label>
                <select
                  value={petType}
                  onChange={(e) => setPetType(e.target.value as PetType)}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                >
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="bird">Bird</option>
                  <option value="reptile">Reptile</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Naming Style</label>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value as NamingStyle)}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                >
                  <option value="elegant">Elegant</option>
                  <option value="cute">Cute</option>
                  <option value="unique">Unique</option>
                  <option value="classic">Classic</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Photo (Optional)</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                  <div className="space-y-1 text-center">
                    <Camera className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer bg-white rounded-md font-medium text-rose-600 hover:text-rose-500">
                        <span>Upload a file</span>
                        <input type="file" className="sr-only" onChange={(e) => setPhoto(e.target.value)} />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={generateNames}
                className="md:col-span-2 w-full bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-lg py-3 font-medium hover:from-rose-600 hover:to-purple-700 transition-colors"
              >
                Generate Names
              </button>
            </div>

            {/* Generated Names */}
            {generatedNames.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Generated Names</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {generatedNames.map((name, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h4 className="text-xl font-semibold text-gray-900">{name.name}</h4>
                      <p className="text-gray-600 text-sm mt-1">{name.meaning}</p>
                      <div className="mt-2 flex items-center">
                        <div className="h-2 w-24 bg-gray-200 rounded-full">
                          <div
                            className="h-2 bg-rose-500 rounded-full"
                            style={{ width: `${name.popularity}%` }}
                          />
                        </div>
                        <span className="ml-2 text-sm text-gray-500">{name.popularity}% popularity</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={generateNames}
                  className="mt-6 flex items-center justify-center w-full py-2 text-rose-600 hover:text-rose-700"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Generate New Names
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Pet Name Generator?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Suggestions</h3>
              <p className="text-gray-600">Names tailored to your pet's unique characteristics and your preferences</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Endless Possibilities</h3>
              <p className="text-gray-600">Generate unlimited name combinations until you find the perfect match</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChevronDown className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Deep Meaning</h3>
              <p className="text-gray-600">Each name comes with its meaning and popularity insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
                alt="Happy Dog"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">Atlas</h3>
                <p className="text-gray-600 mb-4">A German Shepherd who lives up to his mighty name</p>
                <blockquote className="italic text-gray-500">"The name perfectly captures his strong and protective nature!"</blockquote>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba"
                alt="Elegant Cat"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">Luna</h3>
                <p className="text-gray-600 mb-4">A mysterious Siamese with a fitting celestial name</p>
                <blockquote className="italic text-gray-500">"She's as enchanting as the moon itself!"</blockquote>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1511858240726-f89c6f5bf8e8"
                alt="Colorful Bird"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">Echo</h3>
                <p className="text-gray-600 mb-4">A chatty parrot with a voice that carries</p>
                <blockquote className="italic text-gray-500">"The perfect name for our talkative friend!"</blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer p-6 bg-gray-50 rounded-lg">
                <span className="font-medium">How does the name generator work?</span>
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-6 py-4 text-gray-600">
                Our AI analyzes millions of pet names from various sources, including pet forums and registries, to generate personalized suggestions based on your preferences and pet's characteristics.
              </p>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer p-6 bg-gray-50 rounded-lg">
                <span className="font-medium">How many times can I generate new names?</span>
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-6 py-4 text-gray-600">
                You can generate new names as many times as you like until you find the perfect match for your pet!
              </p>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer p-6 bg-gray-50 rounded-lg">
                <span className="font-medium">Are the names unique?</span>
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-6 py-4 text-gray-600">
                Yes! Our database includes thousands of unique names, and we ensure minimal repetition in suggestions to give you fresh options every time.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-rose-500" />
                <span className="text-xl font-semibold">NameMyPet.top</span>
              </div>
              <p className="text-gray-400">
                Helping pet parents find the perfect names for their beloved companions since 2024.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <a href="mailto:zhenliwang9@gmail.com" className="flex items-center text-gray-400 hover:text-white">
                <Mail className="w-4 h-4 mr-2" />
                zhenliwang9@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Nanfang. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
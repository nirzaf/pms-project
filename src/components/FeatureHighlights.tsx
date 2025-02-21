import { School as Pool, Utensils, Wifi, Coffee, Dumbbell, Wine } from 'lucide-react';

const features = [
  {
    icon: Pool,
    title: 'Infinity Pool',
    description: 'Stunning oceanfront infinity pool with panoramic views'
  },
  {
    icon: Utensils,
    title: 'Fine Dining',
    description: 'Award-winning restaurants featuring local and international cuisine'
  },
  {
    icon: Wifi,
    title: 'High-Speed WiFi',
    description: 'Stay connected with complimentary high-speed internet access'
  },
  {
    icon: Coffee,
    title: 'Artisan Coffee',
    description: 'Premium coffee selections and expertly crafted espresso drinks'
  },
  {
    icon: Wine,
    title: 'Beverages',
    description: 'Refreshing selection of fresh juices, teas, and signature drinks'
  },
  {
    icon: Dumbbell,
    title: 'Fitness Center',
    description: 'State-of-the-art equipment and personal training services'
  }
];

export const FeatureHighlights = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Resort Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
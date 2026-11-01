export default function GoogleLocation() {
  const address = 'Hygiguard Solutions, Lucknow, Uttar Pradesh, India';

  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.0897639067416!2d80.9090317!3d26.805270300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdb80b669241%3A0x93aa26bd5b98e8c9!2sHygiguard%20Solutions!5e0!3m2!1sen!2sin!4v1793512285971!5m2!1sen!2sin';

  const directionsUrl = 'https://maps.app.goo.gl/SGPdV2hY1uktQTWA7';

  return (
    <section className="w-full bg-gray-50 py-16 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
            Find Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Visit Hygiguard Solutions
          </h2>

          <p className="text-gray-600 mt-3">
            Get in touch with us or visit our location.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Business Details */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6">Hygiguard Solutions</h3>

            <div className="flex gap-4 mb-6">
              <span className="text-2xl">📍</span>
              <div>
                <h4 className="font-semibold">Our Location</h4>
                <p className="text-gray-600 mt-1">{address}</p>
              </div>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-blue-600 hover:bg-blue-700
              text-white font-semibold px-6 py-3 rounded-lg
              transition-colors"
            >
              📍 Get Directions →
            </a>
          </div>

          {/* Google Maps */}
          <div
            className="w-full h-[350px] md:h-[420px]
            overflow-hidden rounded-2xl shadow-md"
          >
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Hygiguard Solutions Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

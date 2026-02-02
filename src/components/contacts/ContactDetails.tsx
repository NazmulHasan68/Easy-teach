export default function ContactDetails() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Let's Build Something Amazing Together
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Whether you need a new website, digital marketing, or custom software —
          we’re here to help.
        </p>
      </div>

      {/* Cards */}
      <div className="space-y-4">
        {/* Email */}
        <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
          <h3 className="font-bold mb-1">Email Us</h3>
          <p>info@easytechsolutions.com</p>
          <p>support@easytechsolutions.com</p>
        </div>

        {/* Phone */}
        <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
          <h3 className="font-bold mb-1">Call Us</h3>
          <p>+880 1580-741616</p>
          <p>Mon-Fri: 9AM - 6PM</p>
        </div>

        {/* Address */}
        <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
          <h3 className="font-bold mb-1">Visit Us</h3>
          <p>23, SEL HUQ SKYPARK, Mirpur Rd, Dhaka</p>
        </div>
      </div>

      {/* Social */}
      <div>
        <h3 className="font-bold mb-4">Follow Us</h3>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/easytechsolutionsx" className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-emerald-600 hover:text-white">
            FB
          </a>
          <a href="#" className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-emerald-600 hover:text-white">
            IN
          </a>
        </div>
      </div>
    </div>
  );
}

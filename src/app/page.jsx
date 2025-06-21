import ProfileData from "@/data/ProfileData";
import { MapPin, Sparkles, Clock, Phone, Heart, Users, MessageCircle, Instagram, Calendar, Globe, Map } from "lucide-react";
import Image from "next/image.js";

const iconMap = { MessageCircle, Instagram, Calendar, Globe, Map, MapPin };

const Index = () => {
  const { name, slogan, tagline, description, location, logo, avatarEmoji, stats, services, hours, links, contactInfo, footer } = ProfileData;
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
      `}</style>
      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <div className="relative">
            <Image
              width={96}
              height={96}
              src={logo}
              alt={`${name} Logo`}
              className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-lg object-cover"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">{avatarEmoji}</span>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">{name}</h1>
            <p className="text-gray-600 font-medium">{slogan}</p>
            <p className="text-sm text-gray-500 italic mt-1">{tagline}</p>
          </div>
        </div>
        {/* Bio */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/20">
          <p className="text-gray-700 text-center leading-relaxed mb-4">{description}</p>
          <div className="flex items-center justify-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-pink-500" />
            <span className="text-sm">{location.city}</span>
          </div>
        </div>
        {/* Main Links */}
        <div className="space-y-3">
          {links.map((link, index) => {
            const IconComponent = iconMap[link.icon] || MessageCircle;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full p-4 rounded-2xl bg-gradient-to-r ${link.gradientColor} ${link.textColor} shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]`}
              >
                <div className="flex items-center">
                  <IconComponent className="w-6 h-6 mr-4" />
                  <div>
                    <h3 className="font-semibold">{link.title}</h3>
                    <p className="text-sm opacity-90">{link.subtitle}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        {/* Services */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/20">
          <div className="flex items-center mb-4">
            <Sparkles className="w-5 h-5 text-pink-500 mr-2" />
            <h3 className="font-semibold text-gray-800">Serviços em Destaque</h3>
          </div>
          <div className="space-y-2">
            {services.map((service, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mr-3"></div>
                <span className="text-gray-700 text-sm">{service}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Contact Info */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/20 space-y-4">
          <div>
            <div className="flex items-center mb-2">
              <Clock className="w-5 h-5 text-pink-500 mr-2" />
              <h3 className="font-semibold text-gray-800">Horário de Atendimento</h3>
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              {hours.map((hour, idx) => (
                <p key={idx}>{hour.day}: <span className="font-medium">{hour.time}</span></p>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center">
              <Phone className="w-4 h-4 text-pink-500 mr-2" />
              <span className="text-sm text-gray-600">{contactInfo.phoneNote}</span>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="text-center py-6">
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl p-4 shadow-lg">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-5 h-5 mr-2" />
              <span className="font-semibold">{stats.main}</span>
            </div>
            <div className="flex items-center justify-center text-sm opacity-90">
              <span>{stats.sub}</span>
              <Heart className="w-4 h-4 ml-2 fill-current" />
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-400">
            <p>{footer?.copyright}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
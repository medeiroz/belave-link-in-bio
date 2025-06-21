import ProfileData from "@/data/ProfileData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
  Instagram,
  Globe,
  MessageCircle,
  MapPin,
  ExternalLink,
  Clock,
  Calendar,
  Star,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const iconMap = {
  Instagram,
  Globe,
  MessageCircle,
  MapPin,
  Calendar,
};

export default function BelavePage() {
  const { name, slogan, tagline, description, location, logo, stats, services, hours, links, footer } = ProfileData;
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">

      <div className="container mx-auto px-4 py-4 max-w-2xl">
        {/* Profile Header */}
        <Card className="mb-8 border-0 shadow-lg overflow-hidden">
          <div className="rounded-t-xl h-24 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500"></div>
          <CardContent className="p-2 text-center -mt-16 mb-6 relative">
            <div className="relative mb-6">
              <Image
                src={logo}
                alt={`${name} Logo`}
                width={96}
                height={96}
                className="w-32 h-32 mx-auto rounded-full border-6 border-white shadow-lg object-cover" />
            </div>
            <div className="space-y-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{name}</h1>
                <p className="text-xl text-gray-600 mb-2">{slogan}</p>
                <p className="text-lg text-rose-600 font-medium mb-4">{tagline}</p>
                <div className="flex items-center justify-center gap-2 text-gray-500 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{location.city}</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed max-w-lg mx-auto">
                {description}
              </p>
              <div
                className="flex items-center justify-center gap-2 bg-rose-100 text-rose-800 px-4 py-2 rounded-full">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-medium">{stats.label}</span>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {links.filter(l => l.priority).map((link, idx) => {
            const IconComponent = iconMap[link.icon] || MessageCircle;
            return (
              <Button
                key={idx}
                size="lg"
                className={`${link.color} hover:brightness-90 text-white h-16`}
                asChild>
                <Link
                  href={link.url}
                  className="flex flex-col items-center gap-1">
                  <IconComponent className="w-6 h-6" />
                  <span className="text-sm">{link.title}</span>
                </Link>
              </Button>
            );
          })}
        </div>
        {/* Services Section */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-rose-500" />
              <h2 className="text-xl font-bold text-gray-900">Serviços em Destaque</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {services.map((service, index) => (
                <div key={index} className="bg-rose-50 rounded-lg p-3 text-center">
                  <span className="text-sm font-medium text-rose-800">{service}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        {/* Hours Section */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-blue-500" />
              <h2 className="text-xl font-bold text-gray-900">Horário de Atendimento</h2>
            </div>
            <div className="space-y-3">
              {hours.map((hour, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="font-medium text-gray-700">{hour.day}</span>
                  <span className="text-gray-600">{hour.time}</span>
                </div>
              ))}
              <div className="bg-blue-50 rounded-lg p-3 mt-4">
                <p className="text-sm text-blue-800 text-center">📱 Respostas via WhatsApp em até 24h úteis</p>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Links Section */}
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nossos Canais</h2>
          {links.map((link, index) => {
            const IconComponent = iconMap[link.icon] || MessageCircle;
            return (
              <Card
                key={index}
                className={`border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${link.priority ? "ring-2 ring-rose-200" : ""}`}
              >
                <CardContent className="p-0">
                  <Link
                    href={link.url}
                    className="flex items-center p-6 space-x-4 group"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div
                      className={`w-12 h-12 rounded-xl ${link.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 group-hover:text-rose-600 transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-sm text-gray-600 truncate">{link.description}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-rose-600 transition-colors" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
        {/* CTA Section */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">Pronta para se sentir ainda mais bela?</h3>
          <p className="mb-6 opacity-90">Agende sua consulta e descubra o melhor tratamento para você!</p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-rose-600 hover:bg-gray-100"
            asChild>
            <Link href={links.find(l => l.title === "Agendar Horário")?.url || "#"}>Agendar Agora</Link>
          </Button>
        </div>
        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>{footer?.copyright}</p>
        </div>
      </div>
    </div>
  );
}

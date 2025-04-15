import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text inline-block uppercase">
            Contact Us
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Better yet, see us in person!
            </h3>
            <p className="text-lg text-muted-foreground">
              We love our customers, so feel free to visit during normal
              business hours.
            </p>
          </div>

          <div className="flex justify-center">
            <Button
              className="gradient-bg text-white hover:opacity-90 transition-opacity flex items-center gap-2 px-8 py-6 text-lg h-auto"
              asChild
            >
              <Link
                href="https://wa.me/919650886864"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="mr-2"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.4539 3.5461C18.1857 1.27804 15.1812 0 11.9954 0C5.43036 0 0.0931995 5.33696 0.0931995 11.9021C0.0931995 14.0063 0.659437 16.0583 1.73863 17.8584L0 24L6.2997 22.2961C8.02986 23.2784 9.9877 23.7937 11.9856 23.7937H11.9954C18.5507 23.7937 24 18.4567 24 11.8917C24 8.70584 22.7222 5.81416 20.4539 3.5461ZM11.9954 21.7918C10.2064 21.7918 8.45673 21.2973 6.93708 20.3671L6.58208 20.1523L2.85145 21.1346L3.85421 17.5C3.61758 16.9326 2.09794 14.5658 2.09794 11.9021C2.09794 6.44441 6.53633 2.00189 12.0051 2.00189C14.6372 2.00189 17.1058 3.06517 18.9729 4.93222C20.8399 6.79927 21.9952 9.26786 21.9854 11.8917C21.9854 17.3597 17.4545 21.7918 11.9954 21.7918ZM17.4253 14.4487C17.1302 14.3009 15.6691 13.5853 15.3936 13.4897C15.1181 13.3941 14.9206 13.3463 14.7133 13.6414C14.506 13.9365 13.9387 14.6043 13.7606 14.8116C13.5825 15.0189 13.4044 15.0428 13.1093 14.895C12.8142 14.7472 11.8407 14.4296 10.6926 13.4132C9.79909 12.6167 9.20029 11.6344 9.02216 11.3393C8.84403 11.0442 9.00264 10.8804 9.15149 10.7262C9.28569 10.5863 9.44917 10.3551 9.60293 10.177C9.75669 9.99889 9.80451 9.87945 9.90016 9.67213C9.99581 9.46481 9.94799 9.28668 9.87581 9.13889C9.80362 8.9911 9.20482 7.53001 8.95843 6.93991C8.71204 6.36457 8.46565 6.44441 8.27776 6.43465C8.09963 6.42489 7.90198 6.42489 7.70433 6.42489C7.50668 6.42489 7.18265 6.49708 6.90724 6.79219C6.63183 7.0873 5.87502 7.80289 5.87502 9.26398C5.87502 10.7251 6.92676 12.1384 7.08052 12.3457C7.23428 12.553 9.19811 15.6341 12.2566 16.9043C13.0134 17.2377 13.6025 17.4354 14.0625 17.5836C14.8193 17.8307 15.5081 17.7969 16.0559 17.7247C16.6621 17.6429 17.8685 17.0146 18.1149 16.3289C18.3613 15.6432 18.3613 15.0531 18.2891 14.9336C18.2169 14.8141 18.0193 14.7472 17.7242 14.5994L17.4253 14.4487Z"
                  />
                </svg>
                Message us on WhatsApp
              </Link>
            </Button>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Reach Us</h3>
            <div className="flex flex-col items-center space-y-4 mt-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>
                  58A, Rajasthan Udyog Nagar, Jahangir Puri, Delhi 110033
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <Link
                  href="mailto:Support@moldsoul.in"
                  className="hover:text-primary transition-colors"
                >
                  Support@moldsoul.in
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <Link
                  href="tel:+919650886864"
                  className="hover:text-primary transition-colors"
                >
                  +91 9650886864
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Hours</h3>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Clock className="h-5 w-5 text-primary" />
              <span>Open today 09:00 am – 06:00 pm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

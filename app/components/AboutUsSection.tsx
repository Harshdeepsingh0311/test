import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { History, Activity, Rocket } from "lucide-react";

export default function AboutUsSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text inline-block">
            About Us
          </h2>
          <div className="mt-4 mx-auto max-w-[800px]">
            <p className="text-muted-foreground">
              Learn about our journey, expertise, and vision in the mould making
              industry.
            </p>
          </div>
        </div>

        {/* Company Overview and Logo Explanation */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Our Company</h3>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              MoldSoul is a pioneering company in the field of precision
              moulding and 3D printing solutions. Established with a vision to
              transform manufacturing through innovation, we combine
              cutting-edge technology with expert craftsmanship to deliver
              exceptional results for our clients across various industries.
            </p>
            <p className="text-muted-foreground">
              Our team of skilled engineers, designers, and technicians work
              collaboratively to push the boundaries of what's possible in mould
              making and additive manufacturing. We pride ourselves on our
              attention to detail, commitment to quality, and dedication to
              customer satisfaction.
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-16">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-10 blur-xl"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/placeholder.svg"
                alt="MoldSoul Logo"
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Logo Explanation */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-center">Our Logo</h3>
          <div className="grid gap-6 md:grid-cols-[1fr_3fr] items-center">
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg"
                alt="MoldSoul Logo"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
            <div className="text-center">
              <p className="text-muted-foreground">
                Our logo represents the essence of what we do at MoldSoul. The
                circular design symbolizes the continuous cycle of innovation
                and improvement that drives our work. The gradient colors
                reflect our dynamic approach to problem-solving and our ability
                to adapt to changing industry needs.
              </p>
              <p className="text-muted-foreground mt-2">
                The central element represents the precision and technical
                expertise we bring to every project, while the flowing lines
                suggest the fluid nature of our creative process and the
                seamless integration of design and manufacturing.
              </p>
            </div>
          </div>
        </div>

        {/* Past, Present, Future Section */}
        <h3 className="text-2xl font-bold mb-8 text-center">Our Journey</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Past */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <History className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Our Past</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Founded in 2005, MoldSoul began as a small workshop with a team
                of three passionate engineers. Our early years were defined by a
                commitment to craftsmanship and attention to detail, as we
                specialized in traditional mould making techniques for local
                manufacturers.
              </p>
              <p className="text-muted-foreground mt-4">
                Over the years, we built a reputation for reliability and
                quality, gradually expanding our client base and capabilities.
                By 2010, we had established ourselves as a trusted partner for
                companies seeking precision moulding solutions.
              </p>
            </CardContent>
          </Card>

          {/* Present */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-secondary" />
              </div>
              <CardTitle>Our Present</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Today, MoldSoul operates from a state-of-the-art facility
                equipped with the latest technology in 3D printing, CNC
                machining, and injection moulding. Our team has grown to include
                specialists in various fields, from materials science to digital
                design.
              </p>
              <p className="text-muted-foreground mt-4">
                We now serve clients across multiple industries, including
                automotive, aerospace, medical, and consumer products. Our
                current focus is on integrating advanced materials and
                sustainable practices into our manufacturing processes, while
                maintaining the highest standards of quality.
              </p>
            </CardContent>
          </Card>

          {/* Future */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-accent" />
              </div>
              <CardTitle>Our Future</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Looking ahead, MoldSoul is committed to pioneering new
                approaches in additive manufacturing and sustainable production.
                We are investing in research and development to explore
                biodegradable materials, energy-efficient processes, and
                AI-driven design optimization.
              </p>
              <p className="text-muted-foreground mt-4">
                Our vision for the future includes expanding our global
                presence, developing proprietary technologies, and establishing
                an innovation lab to collaborate with universities and research
                institutions. We aim to be at the forefront of the next
                manufacturing revolution.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

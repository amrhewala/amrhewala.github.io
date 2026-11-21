import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CollapsibleText } from "@/components/ui/collapsible-text";

export const About = () => {
  return (
    <section className="py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5" />
      <div className="container relative">
        <Card className="backdrop-blur-sm bg-white/80 border-none shadow-2xl hover:shadow-accent/20 transition-all duration-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg leading-relaxed">
            <CollapsibleText
              text={`I'm a Senior Data Analytics Team Leader at Egypt's General Authority for Investment and Free Zones (GAFI), with more than 19 years of experience turning financial and operational data into decisions. Alongside my public-sector career, I founded a European consulting company, Family Company s.r.o., and have led it as CEO since 2015: on the ground in Slovakia until September 2018, and remotely since then.

At GAFI's Suez Free Zone, I led the computerization of my own department, the Financial Follow-up Department, replacing its paper-based bookkeeping with a database I designed and have built and maintained from 2008 until today. That system covers bookkeeping, registrations, and accounting records for free-zone projects, and it grew into the reports, queries, and Power BI dashboards the department relies on every day. In my current role I lead a team of data analysts and set the department's analysis and visualization standards.

My studies took me through MBA studies in Business Administration at Suez Canal University and development economics at the University of Vienna, together with German language studies. Those years shaped how I think about economics, policy, and business, and they sit at the core of how I work with data today.

I work where data meets business: analytical skills, databases, and quantitative research, delivered through Power BI, Python, SQL, and Excel. If you're looking for someone who can turn complex datasets into clear, defensible decisions, let's connect.`}
              maxLines={3}
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CollapsibleText } from "./ui/collapsible-text";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";

const projects = [
  {
    title: "UK Train Performance Analysis",
    description: `A complete Power BI analysis of UK National Rail ticket records (January to April 2024), which I built end to end, from data modeling and DAX measures to dashboard design, key-influencer analysis, and forecasting.

Scope and Scale:
* 31,653 ticket records across 65 routes. 86.82% were for on-time journeys (27,481 of 31,653).
* £696.5K ticket value, excluding cancelled records (£741.9K including them).
* 1,118 refund requests with a ticket value of £38.7K. These are requests, not payments made.

Key Findings:
* Refund requests: 30% of debit-card ticket records (504 of 1,683) had one, against 2% of all other records (614 of 29,970).
* Delays: 68% of records for journeys arriving at London Euston were delayed (1,064 of 1,567), against 4% of all other records (1,228 of 30,086). These are patterns in the data, not proven causes.
* Ridership, revenue, and ticket-demand trends broken down by route, station, ticket class, and purchase channel.

Deliverables:
* Interactive multi-page Power BI dashboard covering overview, ridership, revenue, journey performance, and ticket demand.
* Time-series forecasting of ridership, revenue, and ticket sales.
* Recommendations backed by a 12-month implementation roadmap.`,
    technologies: ["Power BI", "DAX", "Data Modeling", "Key Influencers", "Forecasting", "Data Visualization"],
    images: ["/UK_Train_Overview_publication.png", "/UK_Train_Revenue.svg", "/UK_Train_Ridership.svg"],
  },
  {
    title: "CA Sales Report",
    description: `Key sales insights from a Power BI sales analysis built during the DEPI Data Analytics Power BI Engineer course.

Key Findings:
* Total Revenue: $34.12M across 78K units sold, an average of about $437 per unit.
* Urban Market Dominance: 57.39% of revenue comes from urban areas, while rural and youth segments remain underutilized, presenting significant growth potential.
* Top-Performing Products: Currus UE-15 and Maximus UC-69 lead sales, emphasizing the value of prioritizing high-impact products.
* Revenue Volatility: Year-over-year revenue shows sharp fluctuations (-51.11% to +14.06%), highlighting the need for strategies to stabilize performance.
* Geographic Insights: British Columbia is a strong market, but Alberta and Manitoba offer untapped expansion opportunities.

Key Takeaways:
* Expand urban market presence while tapping into rural and youth segments.
* Capitalize on high-performing products to sustain growth.
* Develop targeted strategies to reduce revenue volatility.`,
    technologies: ["Power BI", "Data Analysis", "Sales Analytics", "Data Visualization", "Business Intelligence", "Market Analysis"],
    images: ["/lovable-uploads/499b6c2f-a790-4f81-a691-c74bcc41f7e7.png"],
  },
  {
    title: "HR Report",
    description: "This Power BI dashboard provides an overview of employee salaries, workforce distribution, and key HR figures. The report covers salaries by gender, employee experience levels, country-wise salary distribution, and bonuses by employee level.\n\nKey Insights:\n\n* Employee Demographics:\n\nTotal employees: 689\nMale employees: 449 (65%) | Female employees: 240 (35%)\n\n* Salary Distribution:\n\nTotal salaries: 17M. Male employees account for 11M (65.3%) and female employees for 6M (34.7%). These shares follow the headcount split. They are totals, not pay per person, so on their own they do not show whether a pay gap exists.\n\n* Employee Experience:\n\nMost employees have 4 or 5 years of experience. Fewer employees have 7 or 8 years.\n\n* Regional Salary and Bonus Distribution:\n\nEgypt leads in total salaries and bonuses, followed by the UAE, Saudi Arabia, Syria, and Lebanon.\nLevel 5 employees receive the largest share of bonuses (2.07M, 48.2%), followed by Level 3 (1.36M, 31.7%).\n\nWhat the report supports:\n* Comparing salary totals across countries and groups.\n* Reading the experience profile of the workforce.",
    technologies: ["Power BI", "Ms Excel", "Data Visualization", "Data Analysis", "Data Cleansing", "Data Processing"],
    images: ["/HR_report-Salaries.png", "/HR_report-Salaries-Gender.png"],
  },
  {
    title: "Sales Analysis Report (Arabic)",
    description: "Conducted a comprehensive sales analysis from 2009 to 2011, examining key relationships between sales performance, market demand, and various sales categories. This included an in-depth evaluation of sales trends by region, product type, and customer segment, as well as an analysis of distribution patterns and sales dynamics. Additionally, I identified the primary producers involved in the case (late or on time) and assessed their impact on overall sales performance. A key focus was determining high-impact customer segments, analyzing their influence on demand, and evaluating how location, customer category, and product type shape sales trends.",
    technologies: ["Power BI", "Ms Excel", "Data Visualization", "Data Analysis", "Data Cleansing", "Data Processing"],
    images: ["/Sales_Analysis.png"],
  },
];

export const Portfolio = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
      <div className="container relative">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Portfolio
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 backdrop-blur-sm bg-white/80 border-none">
              <Dialog>
                <DialogTrigger className="w-full">
                  <div className="relative h-48 overflow-hidden">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {project.images.map((image, imgIndex) => (
                          <CarouselItem key={imgIndex}>
                            <img 
                              src={image} 
                              alt={`${project.title} - Image ${imgIndex + 1}`}
                              className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {project.images.length > 1 && (
                        <>
                          <CarouselPrevious />
                          <CarouselNext />
                        </>
                      )}
                    </Carousel>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh]">
                  <ScrollArea className="h-full max-h-[85vh] pr-4">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                      <Carousel className="w-full mb-6">
                        <CarouselContent>
                          {project.images.map((image, imgIndex) => (
                            <CarouselItem key={imgIndex}>
                              <img 
                                src={image} 
                                alt={`${project.title} - Image ${imgIndex + 1}`}
                                className="w-full h-auto max-h-[50vh] object-contain"
                              />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        {project.images.length > 1 && (
                          <>
                            <CarouselPrevious />
                            <CarouselNext />
                          </>
                        )}
                      </Carousel>
                      <div className="whitespace-pre-line text-muted-foreground">
                        {project.description}
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CollapsibleText text={project.description} />
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="hover:bg-accent/20 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

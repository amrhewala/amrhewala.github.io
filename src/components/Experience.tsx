
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const experiences = [{
  title: "Senior Data Analytics Team Leader",
  company: "GAFI",
  period: "Jul 2025 - Present",
  description: "Leading the data analytics team at the General Authority for Investment and Free Zones, setting analysis and visualization standards for financial reporting.",
  achievements: [
    "Leading the data analytics team and optimizing its reporting workflows.",
    "Setting department-wide standards for Power BI dashboards and enhancing financial transparency across departments.",
    "Conducting training sessions on Power BI and data visualization best practices.",
    "Prepare, audit and oversee the zone's statistical and periodic reports.",
    "Built an interactive dashboard connected to the zone's databases for real-time and monthly summaries and company performance tracking.",
    "Built databases for investor requests, including residence and work permits, and for tracking responses to the Central Auditing Organization's annual report.",
    "Computerized declarations processing at Port Tawfik in early 2026, its first computerization since the zone opened. Set up the data-entry room, equipment, power and network, and trained staff and project representatives.",
    "Proposed an initiative to organize work instructions, forms and the quality manual. The head of the Authority accepted it and recommended implementation through the Central Quality and Central Systems departments.",
    "Review the zone's information on Egypt's Investment Map and represent the zone in the Authority's complaints system."
  ],
  skills: ["Power BI", "DAX", "Team Leadership", "Python", "Agile"]
}, {
  title: "Senior Data Specialist",
  company: "GAFI",
  period: "Sep 2018 - Jul 2025",
  description: "Senior specialist for financial data analysis, reporting, and dashboard development.",
  achievements: [
    "Spearheaded the analysis of financial data to generate actionable insights and support strategic decision-making.",
    "Designed and implemented Power BI dashboards, enhancing financial transparency across departments.",
    "Identified key financial trends.",
    "Collaborated with cross-functional teams to develop automated data pipelines.",
    "Built an Access database at the Port Tawfik Executive Department to record daily declarations, replacing handwritten ledgers (2025).",
    "Built a database tracking annual and surprise inventory checks of projects.",
    "Fixed chronic outages and slow database connections at the Adabia Executive Department and redesigned its internal network."
  ],
  skills: ["PHP", "Python", "NumPy", "Pandas", "Matplotlib", "Agile"]
}, {
  title: "Founder & CEO",
  company: "Family Company s.r.o",
  period: "2015 - Present",
  description: "Family Company is a multi-service provider offering consulting and support for small and medium enterprises and business entrepreneurs. Founded the company in Slovakia and ran it on the ground until September 2018; managing it remotely since then.",
  skills: ["Business Consultation", "Business Entrepreneurs Consulting ", "Companies Formation", "Legal Services", "IT Services"]
}, {
  title: " Data Specialist",
  company: "GAFI",
  period: "2007 - 2015",
  description: "Financial Follow-up Department, Suez Free Zone: digitized the department's paper-based financial records and built its database from scratch.",
  achievements: [
    "Supervised financial operations for Adabia Free Zone projects, ensuring compliance with regulatory standards and reporting accuracy.",
    "Built the Financial Follow-up Department's database in 2008; still support and extend it with new reports, queries and forms.",
    "Streamlined bookkeeping, registrations and accounting processes.",
    "Served as an Oracle ERP Key User, training team members and optimizing system usage.",
    "Acted as the Investor Support Lead, resolving financial and operational issues, and maintaining compliance with updated guidelines.",
    "Established a feedback loop with the central help desk, improving service quality.",
    "Produced or contributed to every report requested from the department, including outside working hours and on holidays."
  ],
  skills: ["MS Access", "MS Excel", "Agile"]
}];
export const Experience = () => {
  return <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-0">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-accent" />
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">{exp.title}</CardTitle>
                <p className="text-gray-600">{exp.company} • {exp.period}</p>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700">{exp.description}</p>
                
                {exp.achievements && (
                  <div className="mb-4">
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => <Badge key={idx} variant="secondary" className="hover:bg-accent/20 transition-colors">
                      {skill}
                    </Badge>)}
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};

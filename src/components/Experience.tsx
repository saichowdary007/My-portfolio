export default function Experience() {
  const experiences = [
    {
      company: "SoftPoint",
      role: "Data Analyst",
      duration: "May 2020 - June 2022",
      location: "Hyderabad, India",
      achievements: [
        "Increased operational efficiency by 40% by automating data extraction and transformation pipelines using SQL and Python",
        "Improved business intelligence accuracy by 30% through design of interactive Power BI dashboards for real-time monitoring",
        "Reduced ETL processing time by 50% via query optimization and data pipeline automation",
        "Boosted marketing ROI by 15% through A/B testing and regression analysis of customer segments",
        "Decreased machine downtime by 25% by implementing predictive maintenance models with Python and TensorFlow"
      ]
    }
  ];

  return (
    <section id="experience" className="mb-20 px-6 w-full">
      <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 gradient-text">Professional Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="card border border-gray-500/50 rounded-lg p-6 hover:border-primary transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <p className="text-primary/70">{exp.role}</p>
              </div>
              <div className="text-right">
                <p className="text-sm">{exp.duration}</p>
                <p className="text-sm text-muted-foreground">{exp.location}</p>
              </div>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx} className="text-muted-foreground">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

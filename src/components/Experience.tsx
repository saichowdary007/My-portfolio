export default function Experience() {
  const experiences = [
    {
      company: "Sirius XM",
      role: "AWS Data Engineer",
      duration: "Jan 2022 - Present",
      location: "Irving, TX",
      achievements: [
        "Optimized data pipelines with AWS Glue, Spark, and Redshift (30% faster processing)",
        "Managed 100M+ records daily with scalable ETL solutions",
        "Automated workflows with CloudFormation/Terraform (40% faster deployment)",
        "Implemented real-time analytics with Kinesis/Kafka (10M+ events/sec)"
      ]
    },
    {
      company: "T-Mobile",
      role: "Azure Data Engineer",
      duration: "Jan 2020 - Dec 2021",
      location: "Atlanta, GA",
      achievements: [
        "Migrated to cloud-native architecture with Azure Synapse (40% faster processing)",
        "Optimized data models for Power BI/Tableau (35% faster reporting)",
        "Orchestrated 95% of ETL processes via Azure Data Factory",
        "Implemented Azure Data Lake storage (50% better accessibility)"
      ]
    },
    {
      company: "CloudPolitan Technologies",
      role: "AWS Data Engineer",
      duration: "Jan 2016 - Dec 2019",
      location: "Hyderabad, India",
      achievements: [
        "Developed event streaming pipelines (40% lower latency)",
        "Automated ETL deployments with Azure DevOps (35% faster)",
        "Optimized Spark/Hadoop processing (30% faster execution)",
        "Enhanced query performance with Hive/S3 partitioning (40% faster)"
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

export default function Projects() {
  const projects = [
    {
      title: "Cloud Data Warehouse Optimization",
      year: "2022",
      description: "Migrated on-premise warehouse to AWS Redshift, enhancing query performance by 30% through partitioning and Terraform automation",
      tech: ["AWS Glue", "Redshift", "Terraform"]
    },
    {
      title: "Data Lake Implementation",
      year: "2021",
      description: "Architected cloud-based data lake on AWS S3/Azure Lake, reducing retrieval times by 20% with Spark optimization",
      tech: ["AWS S3", "Azure Data Lake", "Spark"]
    },
    {
      title: "Automated ETL Pipeline",
      year: "2020",
      description: "Developed Python/SQL ETL system processing large datasets with 95% automation using AWS Glue",
      tech: ["Python", "SQL", "AWS Glue"]
    }
  ];

  return (
    <section className="mb-20">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 gradient-text">Key Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="card p-6 md:[&:not(:nth-child(2n+1))]:border-l md:[&:not(:nth-child(2n+1))]:ml-[-1px] lg:[&:not(:nth-child(3n+1))]:border-l lg:[&:not(:nth-child(3n+1))]:ml-[-1px] border-primary/20"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <span className="text-sm text-primary/70">{project.year}</span>
            </div>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 text-sm rounded-full bg-secondary/20 text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

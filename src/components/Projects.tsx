export default function Projects() {
  const projects = [
    {
      title: "Sales Performance Dashboard (Power BI & SQL)",
      year: "2022",
      description: "Reduced manual reporting efforts by 50% by building interactive real-time sales tracking dashboard with automated data updates via Excel/SQL Server integration",
      tech: ["Power BI", "SQL Server", "Excel"]
    },
    {
      title: "Customer Segmentation for E-commerce",
      year: "2021",
      description: "Increased targeted marketing conversions by 20% using K-Means clustering to analyze customer behavior and optimize engagement strategies",
      tech: ["Python", "Scikit-learn", "Pandas"]
    },
    {
      title: "Predictive Maintenance Model",
      year: "2020",
      description: "Saved operational costs by implementing proactive maintenance strategies using deep learning models on equipment sensor data",
      tech: ["Python", "TensorFlow", "Keras"]
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

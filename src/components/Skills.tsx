export default function Skills() {
  return (
    <section className="mb-20">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 gradient-text">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card border border-gray-200/50 rounded-lg p-4 hover:border-primary transition-colors">
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-zinc-800 pb-2">Cloud Platforms</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <img src="https://skillicons.dev/icons?i=azure" alt="Azure" className="w-5 h-5 mr-2" />
              Azure
            </li>
            <li className="flex items-center">
              <img src="https://skillicons.dev/icons?i=aws" alt="AWS" className="w-5 h-5 mr-2" />
              AWS
            </li>
            <li className="flex items-center">
              <img src="https://cdn.simpleicons.org/snowflake/29B5E8" alt="Snowflake" className="w-5 h-5 mr-2" />
              Snowflake
            </li>
            <li className="flex items-center">
              <img src="https://skillicons.dev/icons?i=gcp" alt="Google Cloud" className="w-5 h-5 mr-2" />
              Google Cloud
            </li>
          </ul>
        </div>

        <div className="card border border-gray-200/50 rounded-lg p-4 hover:border-primary transition-colors">
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-zinc-800 pb-2">Programming</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <img src="https://skillicons.dev/icons?i=python" alt="Python" className="w-5 h-5 mr-2" />
              Python
            </li>
            <li className="flex items-center">
              <img src="https://skillicons.dev/icons?i=postgresql" alt="SQL" className="w-5 h-5 mr-2" />
              SQL
            </li>
            <li className="flex items-center">
              <img src="https://skillicons.dev/icons?i=r" alt="R" className="w-5 h-5 mr-2" />
              R
            </li>
            <li className="flex items-center">
              <img src="https://skillicons.dev/icons?i=scala" alt="Scala" className="w-5 h-5 mr-2" />
              Scala
            </li>
            <li className="flex items-center">
              <img src="https://cdn.simpleicons.org/c" alt="C" className="w-5 h-5 mr-2" />
              C
            </li>
          </ul>
        </div>

        <div className="card border border-gray-200/50 rounded-lg p-4 hover:border-primary transition-colors">
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-zinc-800 pb-2">Big Data</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <img src="https://cdn.simpleicons.org/apachespark/E25A1C" alt="Spark" className="w-5 h-5 mr-2" />
              Spark
            </li>
            <li className="flex items-center">
              <img src="https://cdn.simpleicons.org/apachehadoop" alt="Hadoop" className="w-5 h-5 mr-2" />
              Hadoop
            </li>
            <li className="flex items-center">
              <img src="https://skillicons.dev/icons?i=kafka" alt="Kafka" className="w-5 h-5 mr-2" />
              Kafka
            </li>
            <li className="flex items-center">
              <img src="https://cdn.simpleicons.org/apachehive" alt="Hive" className="w-5 h-5 mr-2" />
              Hive
            </li>
            <li className="flex items-center">
              <img src="https://cdn.simpleicons.org/apache" alt="Flume" className="w-5 h-5 mr-2" />
              Flume
            </li>
          </ul>
        </div>

        <div className="card border border-gray-200/50 rounded-lg p-4 hover:border-primary transition-colors">
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-zinc-800 pb-2">Databases</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <img src="https://skillicons.dev/icons?i=mysql" alt="MySQL" className="w-5 h-5 mr-2" />
              MySQL
            </li>
            <li className="flex items-center">
              <img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" className="w-5 h-5 mr-2" />
              MongoDB
            </li>
            <li className="flex items-center">
              <img src="https://cdn.simpleicons.org/oracle/F80000" alt="Oracle" className="w-5 h-5 mr-2" />
              Oracle
            </li>
            <li className="flex items-center">
              <img src="https://skillicons.dev/icons?i=postgresql" alt="PostgreSQL" className="w-5 h-5 mr-2" />
              PostgreSQL
            </li>
          </ul>
        </div>

        <div className="card border border-gray-200/50 rounded-lg p-4 hover:border-primary transition-colors">
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-zinc-800 pb-2">Tools</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <img src="https://skillicons.dev/icons?i=aws" alt="AWS Glue" className="w-5 h-5 mr-2" />
              AWS Glue
            </li>
            <li className="flex items-center">
              <img src="https://skillicons.dev/icons?i=azure" alt="Azure Data Factory" className="w-5 h-5 mr-2" />
              Azure Data Factory
            </li>
            <li className="flex items-center">
              <img src="https://cdn.simpleicons.org/powerbi/F2C811" alt="Power BI" className="w-5 h-5 mr-2" />
              Power BI
            </li>
            <li className="flex items-center">
              <img src="https://cdn.simpleicons.org/tableau/E97627" alt="Tableau" className="w-5 h-5 mr-2" />
              Tableau
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

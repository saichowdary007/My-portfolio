export default function Skills() {
  return (
    <section className="mb-20">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 gradient-text">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card border border-gray-200/50 rounded-lg p-4 hover:border-primary transition-colors">
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-zinc-800 pb-2">Python Libraries</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <img src="https://cdn.simpleicons.org/numpy" alt="NumPy" className="h-5 w-5 mr-2" />
              NumPy
            </li>
            <li className="flex items-center">
              <img src="https://cdn.simpleicons.org/pandas" alt="Pandas" className="h-5 w-5 mr-2" />
              Pandas
            </li>
            <li className="flex items-center">
              <img src="https://cdn.simpleicons.org/tensorflow" alt="TensorFlow" className="h-5 w-5 mr-2" />
              TensorFlow
            </li>
            <li className="flex items-center">
              <img src="https://cdn.simpleicons.org/scikitlearn" alt="Scikit-learn" className="h-5 w-5 mr-2" />
              Scikit-learn
            </li>
            <li className="flex items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" alt="Matplotlib" className="h-5 w-5 mr-2" />
              Matplotlib
            </li>
          </ul>
        </div>

        <div className="card border border-gray-200/50 rounded-lg p-4 hover:border-primary transition-colors">
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-zinc-800 pb-2">Programming</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <img src="https://skillicons.dev/icons?i=python" alt="Python" className="h-5 w-5 mr-2" />
              Python
            </li>
            <li className="flex items-center">
              <img src="https://skillicons.dev/icons?i=postgresql" alt="SQL" className="h-5 w-5 mr-2" />
              SQL
            </li>
          </ul>
        </div>

        <div className="card border border-gray-200/50 rounded-lg p-4 hover:border-primary transition-colors">
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-zinc-800 pb-2">Visualization</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI" className="h-5 w-5 mr-2" />
              Power BI
            </li>
            <li className="flex items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png" alt="Tableau" className="h-5 w-5 mr-2" />
              Tableau
            </li>
            <li className="flex items-center">
              <img src="https://cdn.simpleicons.org/r/276DC3" alt="ggplot2" className="h-5 w-5 mr-2" />
              ggplot2
            </li>
          </ul>
        </div>

        <div className="card border border-gray-200/50 rounded-lg p-4 hover:border-primary transition-colors">
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-zinc-800 pb-2">Databases</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <img src="https://skillicons.dev/icons?i=mysql" alt="MySQL" className="h-5 w-5 mr-2" />
              MySQL
            </li>
            <li className="flex items-center">
              <img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" className="h-5 w-5 mr-2" />
              MongoDB
            </li>
            <li className="flex items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" alt="Oracle" className="h-5 w-5 mr-2" />
              Oracle
            </li>
            <li className="flex items-center">
              <img src="https://cdn.simpleicons.org/amazonredshift/DA1F29" alt="Redshift" className="h-5 w-5 mr-2" />
              Redshift
            </li>
            <li className="flex items-center">
              <img src="https://cdn.simpleicons.org/apachecassandra/1287B1" alt="Cassandra" className="h-5 w-5 mr-2" />
              Cassandra
            </li>
          </ul>
        </div>

        <div className="card border border-gray-200/50 rounded-lg p-4 hover:border-primary transition-colors">
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-zinc-800 pb-2">Development</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg" alt="Jupyter" className="h-5 w-5 mr-2" />
              Jupyter
            </li>
            <li className="flex items-center">
              <img src="https://skillicons.dev/icons?i=vscode" alt="VS Code" className="h-5 w-5 mr-2" />
              VS Code
            </li>
            <li className="flex items-center">
              <img src="https://skillicons.dev/icons?i=pycharm" alt="PyCharm" className="h-5 w-5 mr-2" />
              PyCharm
            </li>
            <li className="flex items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/RStudio_logo_flat.svg" alt="R Studio" className="h-5 w-5 mr-2" />
              R Studio
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

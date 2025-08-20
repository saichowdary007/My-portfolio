export default function Education() {
  return (
    <section id="education" className="mb-20 px-6 w-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 gradient-text">Education</h2>
        <div className="space-y-6">
          <div className="card border border-primary/20 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold">Master of Science in Information Technology & Management</h3>
                <p className="text-primary/70">Belhaven University — Jackson, MS, USA</p>
              </div>
              <span className="text-sm text-muted-foreground">Aug 2022 – Apr 2024</span>
            </div>
          </div>

          <div className="card border border-primary/20 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold">Bachelor of Technology</h3>
                <p className="text-primary/70">Jawaharlal Nehru Technological University — Hyderabad, India</p>
              </div>
              <span className="text-sm text-muted-foreground">Aug 2016 – May 2020</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

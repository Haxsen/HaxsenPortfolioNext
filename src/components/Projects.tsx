export default function Projects() {
  return (
    <div className="py-12 bg-gray-100" id="projects">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-bold mb-2">Project 1</h3>
            <p>Short description of project 1.</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-bold mb-2">Project 2</h3>
            <p>Short description of project 2.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

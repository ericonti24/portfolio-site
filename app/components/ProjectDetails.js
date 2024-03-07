import { useParams } from 'react-router-dom';
import { PROJECTS } from '../api/projects/projectsData';

export default function ProjectDetails() {
    // Get the projectId from the URL
    const { projectId } = useParams();

    // Find the project by its id
    const project = PROJECTS.find(project => project.id === projectId);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            {/* Add more details as needed */}
        </div>
    );
}

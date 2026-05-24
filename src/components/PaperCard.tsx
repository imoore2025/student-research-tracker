import { Paper } from "../types/Paper"
import { samplePapers } from "./PaperList";

interface PaperCardProps {
    paper: Paper;
}

export function PaperCard({paper}: PaperCardProps) {
    return (
        <div>
            <h2>{paper.title}</h2>

            <p>
                <strong>Authors:</strong> {paper.authors.join(", ")}
            </p>

            <p>
                <strong>Year:</strong> {paper.year}
            </p>
            <p>
                <strong>Venue:</strong> {paper.venue}
            </p>
            <p>
                <strong>Status:</strong> {paper.paperStatus}
            </p>
            <p>
                <strong>Tags:</strong> {paper.tags.join(", ")}
            </p>
            <p>
                <strong>Notes:</strong> {paper.notes}
            </p>
        </div>
    );
}
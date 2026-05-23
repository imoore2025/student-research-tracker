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
        </div>
    )
}
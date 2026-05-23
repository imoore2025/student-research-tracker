import { Paper } from "../types/Paper"

interface PaperCardProps {
    paper: Paper;
}

export function PaperCard({paper}: PaperCardProps) {
    return (
        <div>
            <h2>{paper.title}</h2>
        </div>
        
    )
}
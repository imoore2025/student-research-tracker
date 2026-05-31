import { Paper } from "../types/Paper";
import PaperCard from "./PaperCard";

//Task: receive an array of papers and render a PaperCard for each one.

interface PaperListProps {
  papers: Paper[];
}

export function PaperList({papers}: PaperListProps) {
  return (
    //For every paper in the papers array, render one PaperCard.
    //Uses Map...
    <section>
      <h2>Research Papers</h2>
      
    {papers.map((paper) => (
      <PaperCard key = {paper.id} paper = {paper} />
    ))}
    </section>
  );
}
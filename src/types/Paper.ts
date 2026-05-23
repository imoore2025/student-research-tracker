export type PaperStatus = "To Read" | "Reading" | "Finished";

export interface Paper {
    id: number;
    title: string;
    authors: string[];
    year: number;
    venue: string;
    status: PaperStatus;
    tags: string[];
    notes: string;
}

/*
title: displays the paper's title
authors: displays who wrote the paper
year: displays the publication year of the paper.
venus: displays the journal or conference where the paper was published.
status: this is so I can filter papers by their reading status (ex: "To Read," "Reading," "Finished"). 
tags: this is for grouping papers by topic or theme (ex: "Machine Learning," "Data Science," "Computer Vision").
notes: this is what I will use to "track my research" aka including my thoughts, summaries, and insights about the paper as I read it.
*/
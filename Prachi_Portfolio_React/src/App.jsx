
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="p-6 space-y-10 max-w-5xl mx-auto">
      {/* About Section */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-base text-gray-300">
          I'm Prachi Barache, a data scientist passionate about efficient AI systems,
          NLP, and high-performance computing. With hands-on experience in
          transformer models, production-grade ML code, and data-driven problem
          solving, I build robust and scalable ML solutions.
        </p>
        <div className="flex space-x-4">
          <Button asChild>
            <a href="/Prachi_CV.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/PrachiBarache">GitHub</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://linkedin.com/in/psbarache">LinkedIn</a>
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Projects</h2>

        <Card>
          <CardContent className="p-6 space-y-2">
            <h3 className="text-2xl font-bold">SimpleRAG</h3>
            <p className="text-gray-400">
              A lightweight Retrieval-Augmented Generation (RAG) system using TinyLlama, FAISS, and custom chunking strategies.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>Python</Badge>
              <Badge>FAISS</Badge>
              <Badge>Hugging Face</Badge>
              <Badge>PyTorch</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-2">
            <h3 className="text-2xl font-bold">Financial Sentiment Analysis</h3>
            <p className="text-gray-400">
              Compared transformer and traditional models (BERT, RoBERTa, SVM, RNN) for sentiment classification on financial texts.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>RoBERTa</Badge>
              <Badge>TensorFlow</Badge>
              <Badge>Financial PhraseBank</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-3">
          <Badge>Python</Badge>
          <Badge>SQL</Badge>
          <Badge>PyTorch</Badge>
          <Badge>TensorFlow</Badge>
          <Badge>Transformers</Badge>
          <Badge>HPC (SLURM)</Badge>
          <Badge>Scikit-learn</Badge>
          <Badge>Data Analysis</Badge>
          <Badge>Prompt Engineering</Badge>
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="text-gray-300">
          Feel free to reach out for collaborations, projects, or just to connect!
        </p>
        <p>Email: <a href="mailto:psbarache@gmail.com" className="underline">psbarache@gmail.com</a></p>
      </section>
    </div>
  );
}

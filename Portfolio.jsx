
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main className="p-6 bg-neutral-100 min-h-screen font-sans">
      <section className="text-center mb-10">
        <h1 className="text-5xl font-bold tracking-tight">Mohamed Mehdaoui — SIMO</h1>
        <p className="text-xl text-gray-600 mt-2">Multidisciplinary Designer | Bold. Modern. Elegant.</p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <Card className="rounded-2xl shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={`https://via.placeholder.com/500x300?text=Design+${i + 1}`}
                  alt={`Design ${i + 1}`}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Design {i + 1}</h3>
                  <p className="text-sm text-gray-500 mt-1">Logo Design — Adobe Illustrator</p>
                  <span className="block mt-2 font-bold text-gray-800">SIMO</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <section className="text-center mt-12">
        <Button className="text-lg px-6 py-3 rounded-2xl">Download PDF Portfolio</Button>
      </section>
    </main>
  );
}

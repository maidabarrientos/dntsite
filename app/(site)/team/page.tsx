import React from "react";
import Team from "@/components/Team";

import Blog from "@/components/Blog";
import { Metadata } from "next";
import CTA from "@/components/CTA";
import Testimonial from "@/components/Testimonial";


export const metadata: Metadata = {
  title: "The Team - DN Trademark",
  description: "Who is behind DNtrademark",
  // other metadata
};


export default function TeamPage() {
  return (
    <>
      
      <Team />
      
      <Testimonial />
      <CTA />
      <Blog />
    </>
  );
}


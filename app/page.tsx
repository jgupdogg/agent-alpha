"use client"; // Add this line at the very top

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./globals.css"; // Ensure global styles are imported
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Button } from './components/button';
import Image from 'next/image';
import { Typography, Box } from '@mui/material';

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  return (
      <div className="relative bg-frames-pattern w-full h-screen flex flex-col items-center justify-center text-center py-24 border-glow">
        <div className="w-96 h-96 rounded-full bg-gradient-to-r from-blue-500 to-green-500 opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center w-full">
          <Typography variant="h2" className="text-white font-bold mb-4">
            Welcome to Agent Alpha
          </Typography>
          <Typography variant="h6" className="text-white mb-8">
            Freelance Data Projects & Portfolio Showcase
          </Typography>
          <Box className="flex items-center mb-4 text-white">
            <Typography variant="body2" className="mr-2">
              Powered by:
            </Typography>
            <Image src="/agent_alpha_name.png" alt="Mobile Logo" width={100} height={50} />
          </Box>
        </div>
      </div>
  );
}

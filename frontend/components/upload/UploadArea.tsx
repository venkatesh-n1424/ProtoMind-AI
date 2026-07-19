"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import UploadCard from "./UploadCard";
import { analyzePaper } from "@/services/api";

interface UploadAreaProps {
  onAnalysisComplete: (data: any) => void;
}

export default function UploadArea({
  onAnalysisComplete,
}: UploadAreaProps) {
 const [loading, setLoading] = useState(false);

const [error, setError] = useState("");


  const onDrop = useCallback(async (acceptedFiles: File[]) => {

    if (acceptedFiles.length === 0) return;

    try {

        setLoading(true);

        setError("");

        const response = await analyzePaper(acceptedFiles[0]);

        console.log("Backend Response:", response);

        onAnalysisComplete(response);

    }

    catch (err) {

        console.error(err);

        setError("Failed to analyze paper.");

    }

    finally {

        setLoading(false);

    }

}, []);

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    noClick: true,
    multiple: false,
    disabled: loading,
    accept: {
      "application/pdf": [".pdf"],
    },
  });

  return (

    <div {...getRootProps()}>

        <input {...getInputProps()} />

        <UploadCard onClick={open} />

        {loading && (

            <p className="mt-4 text-blue-400">

                Analyzing Paper...

            </p>

        )}

      

        {error && (

            <p className="mt-4 text-red-500">

                {error}

            </p>

        )}

    </div>

);
}
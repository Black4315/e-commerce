"use client";

import { useState } from "react";

export default function ProgressBar({ progress }: { progress: number }) {
    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
            <div
                className="h-1 bg-blue-500 transition-all"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
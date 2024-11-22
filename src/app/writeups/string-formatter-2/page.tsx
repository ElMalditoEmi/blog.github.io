// src/pages/page.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import RootLayout from '@/app/layout';

const markdown = `
# Welcome to my Markdown Page

This is some **bold** text and some _italic_ text.

## Here is a list:
- Item 1
- Item 2
- Item 3

[Link to Google](https://www.google.com)
`;

const Page: React.FC = () => {
  return (
      <div className="container mx-auto p-8">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
  );
};

export default Page;
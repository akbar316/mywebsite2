import React from 'react';
import type { Tool, ToolData } from '../types';

// Icons (simple SVGs for demonstration)
const TextIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 6.1H3"/><path d="M21 12.1H3"/><path d="M15.1 18.1H3"/></svg>;
const ConverterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="8 21 3 21 3 16"/><line x1="15" y1="9" x2="20" y2="4"/></svg>;
const DevIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const UtilityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>;
const MiscIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>;
const PdfIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>;

export const tools: Tool[] = [
  // PDF Tools
  {
    path: '/pdf-to-word',
    name: 'PDF to Word Converter',
    title: 'Free PDF to Word Converter - Editable DOCX | DiceTools',
    description: 'Instantly turn your PDFs into editable Word files.',
    seoDescription: 'Unlock the content in your PDFs with our free online PDF to Word converter. This powerful tool instantly transforms your static PDF files into fully editable Microsoft Word (.docx) documents, preserving the original text, formatting, and images with remarkable accuracy. It\'s the perfect solution for students needing to quote sources, professionals updating reports, or anyone looking to modify a contract without retyping everything. Our converter operates entirely in your browser for maximum security—your files are never uploaded. Experience a seamless, no-installation-required conversion process and start editing your documents in seconds with DiceTools.',
    icon: <PdfIcon />,
    component: React.lazy(() => import('../pages/converters/PdfToWordConverter')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['pdf', 'word', 'convert', 'doc', 'docx', 'editable'],
    category: 'PDF'
  },
  // ... (all other tool definitions remain the same, just ensure the component cast is present if needed)
  // NOTE: I'll only show a few for brevity, but the logic applies to all. The cast might not even be necessary if TypeScript can infer it from the `Tool[]` type.
  {
    path: '/word-to-pdf',
    name: 'Word to PDF Converter',
    title: 'Free Word to PDF Converter - DOCX to PDF | DiceTools',
    description: 'Convert Word documents into professional PDF files.',
    seoDescription: 'Create professional, secure PDF documents from your Microsoft Word files using our free online Word to PDF converter. This tool is essential for creating non-editable documents for sharing, such as resumes, reports, or legal contracts, while perfectly preserving your original formatting, fonts, and images. The conversion process is fast and happens securely within your browser, ensuring that your sensitive information is never uploaded to a server. Get a high-quality PDF in seconds without any watermarks or registration. It’s the easiest way to finalize and share your work in a universal format.',
    icon: <PdfIcon />,
    component: React.lazy(() => import('../pages/converters/WordToPdfConverter')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['pdf', 'word', 'convert', 'doc', 'docx', 'create pdf'],
    category: 'PDF'
  },
  {
    path: '/pdf-merger',
    name: 'PDF Merger',
    title: 'Merge PDF Files Online - Combine PDFs for Free | DiceTools',
    description: 'Combine multiple PDF files into a single document.',
    seoDescription: 'Streamline your document management with our free online PDF Merger. This tool allows you to easily combine multiple PDF files into one single, organized document. It’s perfect for consolidating invoices, merging report sections, or creating a single portfolio from various files. Simply upload your documents, arrange them in your desired order with a simple drag-and-drop interface, and click to merge. The entire process is handled securely in your browser, meaning your files stay private. No software installation or registration is needed. Simplify sharing and archiving with this fast and efficient tool.',
    icon: <PdfIcon />,
    component: React.lazy(() => import('../pages/converters/PdfMerger')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['pdf', 'merge', 'combine', 'join', 'unite'],
    category: 'PDF'
  },
  {
    path: '/pdf-splitter',
    name: 'PDF Splitter',
    title: 'Split PDF - Extract Pages from PDF for Free | DiceTools',
    description: 'Extract specific pages or ranges from a PDF file.',
    seoDescription: 'Easily manage large documents with our free online PDF Splitter. This tool lets you extract specific pages or page ranges from any PDF file to create new, smaller documents. It’s ideal for separating chapters from a book, isolating an important page from a report, or creating a custom document from multiple sections. Simply upload your PDF, specify the pages you want (e.g., 1-5, 8, 10-12), and get your new file instantly. Our tool is secure, performing all operations in your browser to protect your privacy. No installation required for this quick and precise PDF page extraction utility.',
    icon: <PdfIcon />,
    component: React.lazy(() => import('../pages/converters/PdfSplitter')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['pdf', 'split', 'extract', 'pages', 'separate'],
    category: 'PDF'
  },
  {
    path: '/pdf-compressor',
    name: 'PDF Compressor',
    title: 'Compress PDF - Reduce PDF File Size Online | DiceTools',
    description: 'Reduce the file size of your PDFs without losing quality.',
    seoDescription: 'Make your PDF files smaller and easier to share with our free online PDF Compressor. This tool reduces the file size of your documents, making them perfect for sending via email, uploading to the web, or saving storage space. Our smart compression algorithm balances file size with quality, ensuring your document remains clear and readable. The process is completely secure, as your files are processed directly in your browser and never uploaded to our servers. Get an optimized PDF in just a few clicks, with no software to install. It’s the fastest way to shrink your PDFs.',
    icon: <PdfIcon />,
    component: React.lazy(() => import('../pages/converters/PdfCompressor')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['pdf', 'compress', 'reduce size', 'optimize', 'shrink'],
    category: 'PDF'
  },
  {
    path: '/pdf-text-extractor',
    name: 'PDF Text Extractor',
    title: 'Extract Text from PDF - Free Online Tool | DiceTools',
    description: 'Pull all readable text content from a PDF file.',
    seoDescription: 'Save time and avoid manual retyping with our free online PDF Text Extractor. This tool allows you to quickly pull all readable text from any PDF document. It\'s incredibly useful for quoting sources, repurposing content, or analyzing data locked within a PDF. Simply upload your file, and the tool will process it locally in your browser, presenting you with the raw text content in a convenient, copyable format. Your document’s privacy is guaranteed as it never leaves your computer. Get instant access to the text within your PDFs without needing any special software.',
    icon: <PdfIcon />,
    component: React.lazy(() => import('../pages/converters/PdfTextExtractor')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['pdf', 'text', 'extract', 'copy', 'ocr', 'read'],
    category: 'PDF'
  },
  {
    path: '/pdf-password-remover',
    name: 'PDF Password Remover',
    title: 'Remove PDF Password - Unlock PDF Online | DiceTools',
    description: 'Unlock password-protected PDFs with the correct password.',
    seoDescription: 'Easily remove the password from a secured PDF with our free online PDF Password Remover. If you have the correct password for a protected document but want to create a version that doesn’t require it for opening, this tool is for you. It allows for easier access and sharing without compromising the initial security check. Simply upload your PDF, enter the current password, and our tool will provide you with a decrypted, unlocked version to download. All processing is done securely in your browser. No software installation needed to gain unrestricted access to your files.',
    icon: <PdfIcon />,
    component: React.lazy(() => import('../pages/converters/PdfPasswordRemover')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['pdf', 'password', 'remove', 'unlock', 'decrypt', 'security'],
    category: 'PDF'
  },
  {
    path: '/pdf-signer',
    name: 'PDF Signer',
    title: 'Sign PDF Online - Free Electronic Signature | DiceTools',
    description: 'Draw or upload a signature and apply it to a PDF.',
    seoDescription: 'Sign documents digitally with our free and secure online PDF Signer. This tool makes it easy to add your electronic signature to contracts, forms, and agreements directly from your browser. You can draw your signature using a mouse or trackpad, then place it anywhere on your PDF document. The process is fast, intuitive, and legally recognized for many purposes. Since the signing process happens on your device, your sensitive documents remain private. No need to print, sign, and scan. Streamline your paperwork and finalize agreements in minutes with this essential online utility.',
    icon: <PdfIcon />,
    component: React.lazy(() => import('../pages/converters/PdfSigner')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['pdf', 'sign', 'signature', 'electronic', 'e-sign', 'contract'],
    category: 'PDF'
  },
  {
    path: '/image-to-pdf',
    name: 'Image to PDF Converter',
    title: 'Image to PDF Converter - Free JPG to PDF | DiceTools',
    description: 'Convert images like JPG and PNG into a single PDF.',
    seoDescription: 'Turn your images into a professional, easy-to-share PDF document with our free online Image to PDF Converter. This tool is perfect for compiling photos, receipts, or sketches into a single file. You can upload multiple images (JPG, PNG, etc.), reorder them as you wish, and combine them into one PDF. It’s a great way to create a digital photo album or submit a visual report. The entire conversion happens securely in your browser, ensuring your images remain private. No watermarks and no registration required—just a simple, fast, and reliable image-to-PDF tool.',
    icon: <PdfIcon />,
    component: React.lazy(() => import('../pages/converters/ImageToPdfConverter')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['pdf', 'image', 'convert', 'jpg', 'png', 'jpeg'],
    category: 'PDF'
  },
  {
    path: '/pdf-to-image',
    name: 'PDF to Image Converter',
    title: 'PDF to Image Converter - Free PDF to JPG/PNG | DiceTools',
    description: 'Convert each page of a PDF into high-quality images.',
    seoDescription: 'Transform your PDF documents into high-quality images with our free online PDF to Image converter. This tool allows you to convert every page of a PDF into a separate PNG or JPG file. It’s perfect for when you need to use a document’s content in a presentation, on a website, or for social media. The process is fast and secure, as all conversions happen directly in your browser. After conversion, you can download the images individually. No software to install and no registration needed. It’s the simplest way to turn your PDF pages into versatile image files.',
    icon: <PdfIcon />,
    component: React.lazy(() => import('../pages/converters/PdfToImageConverter')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['pdf', 'image', 'convert', 'jpg', 'png', 'extract image'],
    category: 'PDF'
  },
  
  // Text Tools
  {
    path: '/word-counter',
    name: 'Word Counter',
    title: 'Free Online Word Counter - Count Words & Characters | DiceTools',
    description: 'Count words, characters, sentences, and paragraphs in your text.',
    seoDescription: 'Get a real-time analysis of your text with our free online Word Counter. This tool instantly counts words, characters, sentences, and paragraphs, making it essential for writers, students, and social media managers. Whether you are drafting an essay to meet a specific word count, composing a tweet within character limits, or optimizing a blog post for SEO, our counter provides accurate and immediate feedback. Simply paste your text to get a detailed breakdown. No installation is required; it works fast and securely right in your browser. Improve your writing and ensure you meet requirements with ease.',
    icon: <TextIcon />,
    component: React.lazy(() => import('../pages/text/WordCounter')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['text', 'count', 'character', 'word', 'statistics'],
    category: 'Text'
  },
  {
    path: '/case-converter',
    name: 'Case Converter',
    title: 'Online Case Converter - Upper, Lower, Title Case | DiceTools',
    description: 'Convert text between UPPER, lower, and Title Case.',
    seoDescription: 'Effortlessly change the capitalization of your text with our versatile online Case Converter. This tool allows you to switch your text to various formats, including UPPERCASE, lowercase, Title Case, and Sentence case, with a single click. It’s an indispensable utility for writers, editors, and programmers who need to reformat text quickly without manual editing. Simply paste your content, select the desired case, and get the converted text instantly. Our tool is fast, secure, and works entirely in your browser. Perfect for formatting headlines, lists, or any text for professional presentation.',
    icon: <TextIcon />,
    component: React.lazy(() => import('../pages/text/CaseConverter')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['text', 'case', 'convert', 'uppercase', 'lowercase', 'titlecase'],
    category: 'Text'
  },
  {
    path: '/remove-line-breaks',
    name: 'Remove Line Breaks',
    title: 'Remove Line Breaks - Online Text Cleaner | DiceTools',
    description: 'Clean up your text by removing line breaks and paragraph spacing.',
    seoDescription: 'Quickly format your text by removing unwanted line breaks and paragraph spaces with our free online tool. This is perfect for cleaning up text that has been copied from emails, PDFs, or other sources with awkward formatting. Our tool can replace line breaks with a space to create a continuous paragraph or remove them entirely to join lines together. It’s a simple way to prepare your text for data entry or any situation where clean, single-line text is required. The process is instant and secure, happening directly in your browser. Format your text correctly in just one click.',
    icon: <TextIcon />,
    component: React.lazy(() => import('../pages/text/RemoveLineBreaks')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['text', 'remove', 'line break', 'newline', 'formatter'],
    category: 'Text'
  },
  {
    path: '/text-repeater',
    name: 'Text Repeater',
    title: 'Text Repeater - Repeat Text Online | DiceTools',
    description: 'Duplicate a word, phrase, or sentence multiple times.',
    seoDescription: 'Generate large blocks of repeated text instantly with our free online Text Repeater. This tool is perfect for creating test data, stress-testing input fields, or simply for fun. Just enter the text you want to duplicate, specify how many times you want it repeated, and our tool will generate the result in seconds. You can even add a custom separator between each repetition. It’s a fast, simple, and powerful utility for developers, testers, and anyone who needs to generate repetitive string data. All operations are done securely in your browser.',
    icon: <TextIcon />,
    component: React.lazy(() => import('../pages/text/TextRepeater')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['text', 'repeat', 'duplicate', 'generator', 'loop'],
    category: 'Text'
  },
  {
    path: '/character-counter',
    name: 'Character Counter',
    title: 'Character Counter - Online Letter & Symbol Count | DiceTools',
    description: 'Count the total number of characters in a block of text.',
    seoDescription: 'Our free online Character Counter tool gives you an accurate and instant count of the characters in your text. It shows you the total character count both with and without spaces, which is essential for adhering to the strict limits on platforms like Twitter, or for writing SEO meta descriptions and headlines. Just paste your text, and the tool provides a real-time count as you type. It’s a fast, reliable, and secure utility that works directly in your browser without needing any installation. Get precise character counts and perfect your content with this simple tool.',
    icon: <TextIcon />,
    component: React.lazy(() => import('../pages/text/CharacterCounter')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['text', 'character', 'count', 'letter', 'length'],
    category: 'Text'
  },
  {
    path: '/base64-tool',
    name: 'Base64 Encoder/Decoder',
    title: 'Base64 Encode & Decode Online | DiceTools',
    description: 'Encode text data to Base64 or decode it back.',
    seoDescription: 'Easily convert your data to and from the Base64 encoding scheme with our free online tool. This Base64 Encoder/Decoder is an essential utility for developers and IT professionals who need to transmit data in a text-based format. It provides a quick and reliable way to encode strings into Base64 or decode Base64 strings back to their original form. All operations are performed securely in your browser, ensuring your data remains private. No need for command-line tools or complex scripts. Just paste your data and get an instant result with this simple and powerful developer tool.',
    icon: <TextIcon />,
    component: React.lazy(() => import('../pages/text/Base64Tool')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['base64', 'encode', 'decode', 'converter', 'developer'],
    category: 'Text'
  },
  {
    path: '/url-encoder',
    name: 'URL Encoder/Decoder',
    title: 'URL Encoder & Decoder Online Tool | DiceTools',
    description: 'Encode strings to be URL-safe or decode them back.',
    seoDescription: 'Our free online URL Encoder/Decoder is an indispensable tool for web developers. It allows you to convert strings with special characters into a URL-safe format (percent-encoding) and decode them back to their original, readable form. This is crucial for passing data in URLs and ensuring they are correctly interpreted by web servers. The tool provides instant and accurate results, and all processing is done securely within your browser. Avoid broken links and malformed URLs by using this simple and reliable utility for all your URL encoding and decoding needs. No installation required.',
    icon: <TextIcon />,
    component: React.lazy(() => import('../pages/text/UrlEncoder')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['url', 'encode', 'decode', 'uri', 'percent encoding'],
    category: 'Text'
  },
  {
    path: '/lorem-ipsum-generator',
    name: 'Lorem Ipsum Generator',
    title: 'Lorem Ipsum Generator - Placeholder Text | DiceTools',
    description: 'Create customizable Lorem Ipsum placeholder text.',
    seoDescription: 'Generate professional placeholder text for your design projects with our free online Lorem Ipsum Generator. This tool is perfect for designers, developers, and publishers who need to fill content areas in mockups and layouts before the final copy is available. You can customize the output by specifying the number of paragraphs, sentences, or words needed. It’s a fast and easy way to create realistic-looking filler text that helps you visualize the final design. All text is generated instantly in your browser. Give your projects a professional touch from the very beginning.',
    icon: <TextIcon />,
    component: React.lazy(() => import('../pages/text/LoremIpsumGenerator')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['text', 'placeholder', 'lorem ipsum', 'generator', 'design'],
    category: 'Text'
  },
  {
    path: '/text-separator',
    name: 'Text Separator',
    title: 'Text Separator Tool - Add Delimiters Online | DiceTools',
    description: 'Add a custom separator between each character of your text.',
    seoDescription: 'Use our simple online Text Separator to insert a custom delimiter between every character in a string of text. This is a handy tool for developers creating formatted data, or for anyone needing to transform text into a specific pattern. Just enter your text, define your separator (such as a comma, space, or any custom character), and instantly get the formatted result. It\'s a quick and efficient way to manipulate strings for data processing or creative purposes. The entire process is secure and happens directly in your browser. No installation needed for this convenient text utility.',
    icon: <TextIcon />,
    component: React.lazy(() => import('../pages/text/TextSeparator')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['text', 'separate', 'delimiter', 'join', 'formatter'],
    category: 'Text'
  },
  {
    path: '/reverse-text',
    name: 'Reverse Text',
    title: 'Reverse Text Online - Free Text Flipper | DiceTools',
    description: 'Easily reverse the characters in any word or sentence.',
    seoDescription: 'Flip your text backward in an instant with our free online Text Reverser. This fun and simple tool takes any string of text and reverses the order of its characters. It\'s great for creating mirror text for social media, for use in coding exercises, or just to see what words look like spelled backward. Simply type or paste your text, and the reversed version appears immediately. The tool handles letters, numbers, and symbols with ease. All processing is done securely in your browser. A quick and easy way to flip your text for any creative or technical purpose.',
    icon: <TextIcon />,
    component: React.lazy(() => import('../pages/text/ReverseText')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['text', 'reverse', 'flip', 'string', 'backward'],
    category: 'Text'
  },

  // Converters
  {
    path: '/length-converter',
    name: 'Length Converter',
    title: 'Length Converter - Meters, Feet, Inches & More | DiceTools',
    description: 'Convert between various metric and imperial units of length.',
    seoDescription: 'Our free online Length Converter provides fast and accurate conversions between a wide range of length units. Easily switch between metric units like kilometers, meters, and centimeters, and imperial units like miles, feet, and inches. This tool is perfect for students, engineers, and anyone working on a project that requires precise measurements. The intuitive interface gives you instant results as you type. All calculations are performed securely in your browser. No need to remember complex formulas; just a simple, reliable tool for all your length conversion needs.',
    icon: <ConverterIcon />,
    component: React.lazy(() => import('../pages/converters/LengthConverter')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['convert', 'length', 'meter', 'foot', 'inch', 'mile'],
    category: 'Converters'
  },
  {
    path: '/weight-converter',
    name: 'Weight Converter',
    title: 'Weight & Mass Converter - kg, lbs, oz & More | DiceTools',
    description: 'Switch between different units of weight and mass.',
    seoDescription: 'Effortlessly convert between various units of weight and mass with our free online converter. This tool supports conversions between kilograms (kg), pounds (lbs), ounces (oz), grams (g), and more. It’s an essential utility for cooking, fitness tracking, and scientific applications. The clean, user-friendly interface provides instant and accurate results. Simply enter a value, select your units, and the conversion appears automatically. All calculations are handled securely in your browser for a fast and private experience. Make your weight conversions simple and precise with DiceTools.',
    icon: <ConverterIcon />,
    component: React.lazy(() => import('../pages/converters/WeightConverter')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['convert', 'weight', 'mass', 'kg', 'pound', 'ounce'],
    category: 'Converters'
  },
  {
    path: '/temperature-converter',
    name: 'Temperature Converter',
    title: 'Temperature Converter - Celsius, Fahrenheit, Kelvin | DiceTools',
    description: 'Convert temperatures between Celsius, Fahrenheit, and Kelvin.',
    seoDescription: 'Quickly and accurately convert temperatures between Celsius (°C), Fahrenheit (°F), and Kelvin (K) with our free online Temperature Converter. This tool is indispensable for students, scientists, travelers, and anyone who needs to work with different temperature scales. The simple interface provides instant conversions as you type, eliminating the need to remember complex formulas. All calculations are performed securely in your browser. Whether you\'re checking the weather in another country or working on a science project, get precise and reliable temperature conversions in seconds.',
    icon: <ConverterIcon />,
    component: React.lazy(() => import('../pages/converters/TemperatureConverter')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['convert', 'temperature', 'celsius', 'fahrenheit', 'kelvin'],
    category: 'Converters'
  },
  {
    path: '/speed-converter',
    name: 'Speed Converter',
    title: 'Speed Converter - mph, km/h, knots & More | DiceTools',
    description: 'Convert between common units of speed.',
    seoDescription: 'Our free online Speed Converter makes it easy to switch between various units of speed. Instantly convert miles per hour (mph), kilometers per hour (km/h), meters per second (m/s), knots, and more. This tool is perfect for drivers, pilots, runners, and anyone who needs fast and accurate speed conversions. The clean and intuitive interface provides immediate results as you type. All calculations are performed securely in your browser for maximum speed and privacy. Stop doing manual conversions and get the precise speed data you need with this simple and reliable tool.',
    icon: <ConverterIcon />,
    component: React.lazy(() => import('../pages/converters/SpeedConverter')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['convert', 'speed', 'kmh', 'mph', 'knots', 'm/s'],
    category: 'Converters'
  },
  {
    path: '/time-converter',
    name: 'Time Converter',
    title: 'Time Unit Converter - Hours, Minutes, Seconds | DiceTools',
    description: 'Convert between different units of time, from seconds to years.',
    seoDescription: 'Effortlessly convert between various units of time with our comprehensive online Time Converter. This tool allows you to switch between seconds, minutes, hours, days, weeks, and years with ease. It’s perfect for project planning, scheduling, or any calculation where you need to translate time durations. The user-friendly interface gives you instant and accurate results. All conversions are handled securely in your browser. No need for complex manual calculations. Save time and get the precise time conversions you need for any task with this versatile and reliable utility.',
    icon: <ConverterIcon />,
    component: React.lazy(() => import('../pages/converters/TimeConverter')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['convert', 'time', 'hour', 'minute', 'second', 'day'],
    category: 'Converters'
  },
  {
    path: '/currency-converter',
    name: 'Currency Converter',
    title: 'Currency Converter - Exchange Rates Tool | DiceTools',
    description: 'Convert between major world currencies.',
    seoDescription: 'Get a quick and easy currency conversion with our free online tool. This Currency Converter provides exchange rates for major world currencies like USD, EUR, GBP, and JPY. It\'s a perfect companion for travelers, online shoppers, and anyone who needs a fast estimate of currency values. Please note that the rates are for informational purposes and not real-time. The clean interface allows you to enter an amount, select your currencies, and get an instant result. All calculations are done in your browser. A simple tool for your basic currency conversion needs.',
    icon: <ConverterIcon />,
    component: React.lazy(() => import('../pages/converters/CurrencyConverter')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['convert', 'currency', 'money', 'usd', 'eur', 'gbp', 'exchange'],
    category: 'Converters'
  },
  {
    path: '/number-to-words-converter',
    name: 'Number to Words',
    title: 'Number to Words Converter - Spell Out Numbers | DiceTools',
    description: 'Convert any number into its written English word form.',
    seoDescription: 'Translate numbers into their English word representation instantly with our free online Number to Words Converter. This tool is incredibly useful for writing checks, filling out legal documents, or in any situation where spelling out numbers is required to prevent errors or ambiguity. Simply enter a number, and our tool will accurately convert it into words. It handles both small and large numbers with ease. The process is fast, secure, and happens entirely in your browser. Avoid mistakes and ensure clarity in your documents with this simple and reliable utility.',
    icon: <ConverterIcon />,
    component: React.lazy(() => import('../pages/converters/NumberToWordsConverter')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['convert', 'number', 'words', 'spelling', 'check writing'],
    category: 'Converters'
  },
  {
    path: '/binary-decimal-converter',
    name: 'Binary ↔ Decimal Converter',
    title: 'Binary to Decimal & Decimal to Binary Converter | DiceTools',
    description: 'Convert numbers between the binary and decimal systems.',
    seoDescription: 'Our free online Binary ↔ Decimal Converter offers seamless, two-way conversions between the binary (base-2) and decimal (base-10) number systems. This is an essential tool for computer science students, programmers, and IT professionals. The intuitive interface provides real-time results as you type in either field. Enter a binary number to see its decimal equivalent, or enter a decimal number to get its binary form. All calculations are done instantly in your browser. Simplify your work with different number systems with this fast, accurate, and easy-to-use converter.',
    icon: <ConverterIcon />,
    component: React.lazy(() => import('../pages/converters/BinaryToDecimalConverter')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['convert', 'binary', 'decimal', 'number', 'base2', 'base10'],
    category: 'Converters'
  },
  {
    path: '/roman-numeral-converter',
    name: 'Roman ↔ Numeral Converter',
    title: 'Roman Numeral Converter - Numbers to Roman | DiceTools',
    description: 'Convert between standard numbers and Roman numerals.',
    seoDescription: 'Easily translate standard numbers into Roman numerals and vice versa with our free online Roman Numeral Converter. This tool is perfect for students, history buffs, and anyone who needs to work with this ancient numbering system. The converter provides instant, two-way results as you type. Enter a number to get its Roman numeral representation, or type in a Roman numeral to see its modern numerical value. The tool is fast, accurate, and works securely in your browser. Master Roman numerals for any purpose with this simple and efficient online utility.',
    icon: <ConverterIcon />,
    component: React.lazy(() => import('../pages/converters/RomanNumeralConverter')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['convert', 'roman', 'numeral', 'numbers', 'history'],
    category: 'Converters'
  },
  {
    path: '/json-to-csv-converter',
    name: 'JSON to CSV Converter',
    title: 'JSON to CSV Converter - Free Online Tool | DiceTools',
    description: 'Convert data from JSON array format to CSV.',
    seoDescription: 'Transform your JSON arrays into structured CSV files with our free and powerful online converter. This tool is invaluable for developers and data analysts who need to switch between these popular data formats. Simply paste your JSON array of objects, and our tool will instantly generate the corresponding CSV data, complete with headers. The entire conversion process is handled securely within your browser, ensuring your data remains private. No server uploads are required. It’s a fast, reliable, and straightforward way to make your JSON data compatible with spreadsheet applications.',
    icon: <ConverterIcon />,
    component: React.lazy(() => import('../pages/converters/JsonToCsvConverter')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['convert', 'json', 'csv', 'data', 'developer', 'excel'],
    category: 'Converters'
  },
  
  // Developer Tools
  {
    path: '/json-formatter',
    name: 'JSON Formatter',
    title: 'JSON Formatter & Validator - Online Tool | DiceTools',
    description: 'Format, beautify, and validate your JSON data.',
    seoDescription: 'Clean up, beautify, and validate your JSON with our powerful free online tool. Our JSON Formatter takes messy, single-line JSON and turns it into a readable, properly indented format. It also acts as a validator, instantly identifying and highlighting syntax errors in your data structure. This is an essential tool for any developer working with APIs or configuration files. All processing is done securely in your browser to keep your data private. Save time debugging and make your JSON easy to read and understand with this indispensable utility.',
    icon: <DevIcon />,
    component: React.lazy(() => import('../pages/developer/JsonFormatter')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['developer', 'json', 'format', 'validate', 'beautify', 'minify'],
    category: 'Developer'
  },
  {
    path: '/html-formatter',
    name: 'HTML Formatter',
    title: 'HTML Formatter - Online Code Beautifier | DiceTools',
    description: 'Beautify and properly indent your HTML code.',
    seoDescription: 'Improve the readability of your HTML code with our free online HTML Formatter. This tool takes unformatted or minified HTML and transforms it into a clean, well-structured document with proper indentation. It helps you easily visualize the nesting of your elements, making it simpler to debug and maintain your code. Simply paste your markup, and our formatter will provide a beautiful, organized version instantly. All formatting is done securely in your browser. It’s an essential tool for web developers who value clean, professional code. Try it now for hassle-free HTML beautification.',
    icon: <DevIcon />,
    component: React.lazy(() => import('../pages/developer/HtmlFormatter')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['developer', 'html', 'format', 'beautify', 'indent', 'cleaner'],
    category: 'Developer'
  },
  {
    path: '/js-minifier',
    name: 'JS Minifier',
    title: 'JavaScript Minifier - Online JS Compressor | DiceTools',
    description: 'Compress your JavaScript code to reduce file size.',
    seoDescription: 'Optimize your website’s performance with our free online JavaScript Minifier. This tool helps you reduce the file size of your JS code by removing unnecessary characters like comments, whitespace, and newlines, without altering its functionality. Minified JavaScript files load faster, leading to a better user experience. Simply paste your code, and our tool will instantly provide a compressed, production-ready version. The entire process is handled securely in your browser. It’s a quick, essential step for any web developer looking to improve site speed and efficiency.',
    icon: <DevIcon />,
    component: React.lazy(() => import('../pages/developer/JsMinifier')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['developer', 'javascript', 'minify', 'compress', 'optimize', 'js'],
    category: 'Developer'
  },
  {
    path: '/css-minifier',
    name: 'CSS Minifier',
    title: 'CSS Minifier - Online CSS Compressor | DiceTools',
    description: 'Compress your CSS code to reduce file size.',
    seoDescription: 'Speed up your website by reducing the size of your stylesheets with our free online CSS Minifier. This tool compresses your CSS code by safely removing unnecessary characters like comments and whitespace. A smaller CSS file means a faster page load time, which is crucial for both user experience and SEO. Simply paste your CSS, and our tool will instantly generate a minified, lightweight version ready for your production environment. All processing is done securely in your browser. It’s a simple and effective way to optimize your site’s performance.',
    icon: <DevIcon />,
    component: React.lazy(() => import('../pages/developer/CssMinifier')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['developer', 'css', 'minify', 'compress', 'optimize', 'stylesheet'],
    category: 'Developer'
  },
  {
    path: '/color-picker',
    name: 'Color Picker',
    title: 'Online Color Picker & Converter - HEX, RGB, HSL | DiceTools',
    description: 'Visually pick a color and get its code in multiple formats.',
    seoDescription: 'Find the perfect color for your project with our intuitive online Color Picker. This tool is ideal for designers and developers, allowing you to visually select any color and instantly get its value in HEX, RGB, and HSL formats. Whether you\'re designing a website, creating digital art, or developing a brand palette, our picker simplifies the process. The interface provides for easy color exploration and one-click copying of any code. Discover, identify, and convert colors effortlessly to bring your creative vision to life. No installation required for this essential design utility.',
    icon: <DevIcon />,
    component: React.lazy(() => import('../pages/developer/ColorPicker')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['developer', 'color', 'picker', 'hex', 'rgb', 'hsl', 'design'],
    category: 'Developer'
  },
  {
    path: '/regex-tester',
    name: 'Regex Tester',
    title: 'Online Regex Tester & Debugger - JavaScript | DiceTools',
    description: 'Test and debug your regular expressions in real-time.',
    seoDescription: 'Validate and debug your regular expressions (regex) with our free and interactive online Regex Tester. This tool is built for developers who need to quickly create and test patterns against sample text. As you type your regex, it instantly highlights all matches, helping you refine your pattern for accuracy. It supports various flags like global (g) and case-insensitive (i). All testing is performed securely in your browser. A powerful and essential utility for mastering regular expressions and ensuring they work perfectly before implementation in your code.',
    icon: <DevIcon />,
    component: React.lazy(() => import('../pages/developer/RegexTester')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['developer', 'regex', 'test', 'regular expression', 'validate'],
    category: 'Developer'
  },
  {
    path: '/hash-generator',
    name: 'Hash Generator',
    title: 'Hash Generator - MD5 & SHA-256 Online | DiceTools',
    description: 'Generate MD5 and SHA-256 hashes from any text.',
    seoDescription: 'Create secure cryptographic hashes with our free online Hash Generator. This tool allows you to instantly generate MD5 and SHA-256 hashes from any text string. Hashing is crucial for verifying data integrity, storing passwords securely, and other cryptographic applications. Simply enter your text, and the tool will compute the corresponding hashes in real-time. All calculations are performed in your browser, ensuring your input data remains completely private. A fast, reliable, and essential tool for developers and security professionals who need to generate hashes on the fly.',
    icon: <DevIcon />,
    component: React.lazy(() => import('../pages/developer/HashGenerator')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['developer', 'hash', 'md5', 'sha256', 'crypto', 'security'],
    category: 'Developer'
  },
  {
    path: '/ip-finder',
    name: 'My IP Finder',
    title: 'What Is My IP Address? - Free IP Finder | DiceTools',
    description: 'Quickly find your public IP address.',
    seoDescription: 'Instantly find your public IP address with our free and simple "My IP Finder" tool. Your IP address is your unique identifier on the internet, and knowing it can be essential for networking, gaming, and security purposes. Our tool displays your public IP address immediately, with no extra clicks required. It\'s a fast, accurate, and private way to get the information your browser already makes available. Whether you are a developer debugging a connection or just curious, this tool provides the quickest way to answer the question, "What is my IP?".',
    icon: <DevIcon />,
    component: React.lazy(() => import('../pages/developer/IpFinder')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['developer', 'ip', 'address', 'what is my ip', 'network'],
    category: 'Developer'
  },
  {
    path: '/uuid-generator',
    name: 'UUID Generator',
    title: 'UUID Generator - Generate v4 UUIDs Online | DiceTools',
    description: 'Generate unique version 4 UUIDs with a single click.',
    seoDescription: 'Generate Version 4 (random) UUIDs (Universally Unique Identifiers) instantly with our free online tool. UUIDs are indispensable for developers who need unique keys for databases, transaction IDs, or any application requiring a distinct identifier without a central authority. With a single click, our tool provides a new, valid v4 UUID ready to be copied and used. It’s fast, reliable, and works directly in your browser. No need to write scripts or run commands. Bookmark this utility for a quick and easy way to generate UUIDs whenever you need them.',
    icon: <DevIcon />,
    component: React.lazy(() => import('../pages/developer/UuidGenerator')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['developer', 'uuid', 'guid', 'generator', 'unique id'],
    category: 'Developer'
  },
  {
    path: '/qr-code-generator',
    name: 'QR Code Generator',
    title: 'Free QR Code Generator - Create QR Codes Online | DiceTools',
    description: 'Generate a QR code from any text or URL.',
    seoDescription: 'Create custom QR codes for free with our easy-to-use online QR Code Generator. Instantly convert any text, URL, Wi-Fi password, or contact information into a scannable QR code. QR codes are an excellent way to bridge the physical and digital worlds, perfect for marketing materials, event tickets, or sharing information quickly. Simply type your data, and the QR code is generated in real-time, ready for you to save. Our generator is fast, works entirely in your browser to protect your privacy, and requires no installation.',
    icon: <DevIcon />,
    component: React.lazy(() => import('../pages/developer/QrCodeGenerator')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['developer', 'qr', 'code', 'generator', 'url', 'marketing'],
    category: 'Developer'
  },
  
  // Utility Tools
  {
    path: '/age-calculator',
    name: 'Age Calculator',
    title: 'Age Calculator - Find Your Age in Years, Months, Days | DiceTools',
    description: 'Calculate your exact age in years, months, and days.',
    seoDescription: 'Discover your precise age down to the day with our free online Age Calculator. Just enter your date of birth, and our tool will instantly calculate your age in years, months, and days. It’s a fun tool for finding out how many days you’ve been alive or for calculating the exact age for official forms. The calculator is fast, accurate, and easy to use. All calculations are performed securely in your browser, ensuring your personal information remains private. Get a detailed breakdown of your age in seconds with this simple and powerful utility.',
    icon: <UtilityIcon />,
    component: React.lazy(() => import('../pages/utility/AgeCalculator')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['utility', 'age', 'calculator', 'birthday', 'date'],
    category: 'Utility'
  },
  {
    path: '/bmi-calculator',
    name: 'BMI Calculator',
    title: 'BMI Calculator - Calculate Your Body Mass Index | DiceTools',
    description: 'Calculate your Body Mass Index (BMI) using metric or imperial units.',
    seoDescription: 'Assess your health with our free and easy-to-use online BMI Calculator. The Body Mass Index (BMI) is a common metric to determine if your weight is in a healthy range. Our tool supports both metric (kg, cm) and imperial (lbs, inches) systems. Simply enter your height and weight, and it will instantly calculate your BMI and classify it into standard weight status categories like underweight, normal weight, or overweight. It’s a great first step in understanding your fitness level. Fast, private, and no installation required.',
    icon: <UtilityIcon />,
    component: React.lazy(() => import('../pages/utility/BmiCalculator')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['utility', 'bmi', 'health', 'calculator', 'weight', 'fitness'],
    category: 'Utility'
  },
  {
    path: '/percentage-calculator',
    name: 'Percentage Calculator',
    title: 'Percentage Calculator - Free Online Tool | DiceTools',
    description: 'Quickly solve various percentage-based math problems.',
    seoDescription: 'Solve any percentage problem with ease using our free online Percentage Calculator. This versatile tool can handle various calculations, such as finding a percentage of a number, calculating discounts, or determining what percentage one number is of another. It’s perfect for students, shoppers, and business professionals who need quick and accurate answers. The straightforward interface eliminates confusion and provides instant results. Stop struggling with manual calculations and let our handy tool do the math for you. Get fast and reliable percentage calculations for any purpose.',
    icon: <UtilityIcon />,
    component: React.lazy(() => import('../pages/utility/PercentageCalculator')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['utility', 'percentage', 'calculator', 'math', 'discount'],
    category: 'Utility'
  },
  {
    path: '/date-difference-calculator',
    name: 'Date Difference Calculator',
    title: 'Date Difference Calculator - Duration Between Dates | DiceTools',
    description: 'Calculate the duration in days, months, and years between two dates.',
    seoDescription: 'Find the exact duration between any two dates with our free online Date Difference Calculator. This tool accurately calculates the number of years, months, and days separating a start date and an end date. It’s perfect for project managers tracking timelines, for calculating your age, or for finding out the time between significant life events. Just pick your two dates, and our calculator will instantly provide the detailed time span. The tool is easy to use and works securely in your browser. Measure time between dates effortlessly with this handy utility.',
    icon: <UtilityIcon />,
    component: React.lazy(() => import('../pages/utility/DateDifferenceCalculator')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['utility', 'date', 'difference', 'duration', 'days between'],
    category: 'Utility'
  },
  {
    path: '/tip-calculator',
    name: 'Tip Calculator',
    title: 'Tip Calculator - Calculate Tip & Split Bill | DiceTools',
    description: 'Calculate the appropriate tip and split the bill among friends.',
    seoDescription: 'Eliminate the hassle of restaurant math with our free and simple Tip Calculator. This tool helps you quickly calculate the tip amount based on your bill total and desired tip percentage. It also allows you to easily split the final bill, including the tip, among any number of people. It’s perfect for dining out with friends or family. The intuitive interface provides instant and accurate calculations, ensuring a smooth and fair payment process. Avoid confusion at the end of your meal and use our handy tool for a stress-free experience.',
    icon: <UtilityIcon />,
    component: React.lazy(() => import('../pages/utility/TipCalculator')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['utility', 'tip', 'calculator', 'restaurant', 'split bill'],
    category: 'Utility'
  },
  {
    path: '/password-generator',
    name: 'Password Generator',
    title: 'Strong Password Generator - Secure Passwords | DiceTools',
    description: 'Create strong, secure, and random passwords.',
    seoDescription: 'Enhance your online security with our free Strong Password Generator. This tool creates complex, random passwords that are difficult to guess, helping to protect your accounts from unauthorized access. You can customize the password length and include or exclude uppercase letters, lowercase letters, numbers, and symbols to meet any requirement. Our generator creates passwords locally in your browser, ensuring they are never transmitted over the internet. Generating a unique password for each of your accounts is a vital security practice. Create robust passwords in seconds with this essential tool.',
    icon: <UtilityIcon />,
    component: React.lazy(() => import('../pages/utility/PasswordGenerator')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['utility', 'password', 'generator', 'security', 'secure'],
    category: 'Utility'
  },
  {
    path: '/unit-converter',
    name: 'Unit Converter',
    title: 'Universal Unit Converter - All-in-One Converter | DiceTools',
    description: 'A versatile, all-in-one converter for various measurement units.',
    seoDescription: 'Our Universal Unit Converter is your single destination for a wide range of measurement conversions. This powerful, all-in-one tool handles length, mass, time, speed, and more, all within one clean interface. Simply select the type of measurement you want to convert, choose your units, and enter your value to get an instant and accurate result. It’s an essential tool for students, engineers, and anyone who frequently works with different measurement systems. Fast, comprehensive, and reliable, this tool eliminates the need for multiple single-purpose converters.',
    icon: <UtilityIcon />,
    component: React.lazy(() => import('../pages/utility/UnitConverter')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['utility', 'unit', 'converter', 'all in one', 'measurement'],
    category: 'Utility'
  },
  {
    path: '/countdown-timer',
    name: 'Countdown Timer',
    title: 'Online Countdown Timer with Alarm | DiceTools',
    description: 'Set a simple countdown timer for any task or occasion.',
    seoDescription: 'Stay on track and manage your time effectively with our free online Countdown Timer. This tool is perfect for setting a timer for workouts, cooking, study sessions, or presentations. Simply enter the desired duration in hours, minutes, and seconds, and start the countdown. The large, clear display makes it easy to see the remaining time at a glance. The timer runs directly in your browser tab. No installation needed. It’s a simple, reliable, and accessible tool for all your timing needs. Focus on your tasks and let our timer handle the rest.',
    icon: <UtilityIcon />,
    component: React.lazy(() => import('../pages/utility/CountdownTimer')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['utility', 'countdown', 'timer', 'alarm', 'stopwatch'],
    category: 'Utility'
  },
  {
    path: '/stopwatch',
    name: 'Stopwatch',
    title: 'Online Stopwatch with Lap Timer | DiceTools',
    description: 'A simple online stopwatch with lap timing functionality.',
    seoDescription: 'Measure time with precision using our free online Stopwatch. This tool is perfect for sports, workouts, or any activity that requires accurate timing down to the millisecond. Our stopwatch features simple start, stop, and reset controls, along with a lap function that lets you record split times without interrupting the main timer. The large, easy-to-read display ensures you never miss a beat. It’s a reliable, browser-based tool that works on any device without requiring any downloads. Start timing your activities with accuracy and ease.',
    icon: <UtilityIcon />,
    component: React.lazy(() => import('../pages/utility/Stopwatch')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['utility', 'stopwatch', 'timer', 'lap', 'time'],
    category: 'Utility'
  },
  {
    path: '/gpa-calculator',
    name: 'GPA Calculator',
    title: 'GPA Calculator - Calculate Your College GPA | DiceTools',
    description: 'Calculate your Grade Point Average (GPA) for any semester.',
    seoDescription: 'Easily calculate your semester or cumulative Grade Point Average (GPA) with our free online GPA Calculator. This tool is designed to help high school and college students track their academic performance. Simply enter your course grades and the corresponding credit hours, and our calculator will instantly compute your GPA on a 4.0 scale. You can add or remove courses to match your academic load. It’s a fast, accurate, and simple way to stay on top of your grades and monitor your progress toward your academic goals. Plan your studies effectively with this essential student utility.',
    icon: <UtilityIcon />,
    component: React.lazy(() => import('../pages/utility/GpaCalculator')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['utility', 'gpa', 'calculator', 'school', 'college', 'grades'],
    category: 'Utility'
  },

  // Misc Tools
  {
    path: '/notes-pad',
    name: 'Notes Pad',
    title: 'Online Notepad - Simple Notes Pad | DiceTools',
    description: 'A simple online notepad that saves your text automatically.',
    seoDescription: 'Capture your thoughts, ideas, and reminders with our convenient online Notes Pad. This tool offers a clean, distraction-free writing environment that automatically saves your notes in your browser\'s local storage. This means your text remains saved even if you close the tab or restart your browser. It’s perfect for taking quick notes during a meeting or brainstorming ideas without needing a separate application. Your data is private and stored only on your device. Enjoy a seamless and persistent note-taking experience with this simple and reliable tool.',
    icon: <MiscIcon />,
    component: React.lazy(() => import('../pages/misc/NotesPad')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['misc', 'notes', 'notepad', 'text', 'scratchpad'],
    category: 'Misc'
  },
  {
    path: '/todo-list',
    name: 'To-Do List',
    title: 'Simple To-Do List - Online Task Manager | DiceTools',
    description: 'A simple task manager that saves your list in your browser.',
    seoDescription: 'Organize your tasks and boost your productivity with our simple online To-Do List. This tool allows you to quickly add, complete, and delete tasks to keep track of your daily responsibilities. Your list is automatically saved in your browser\'s local storage, so your tasks will be there for you every time you visit. It’s a straightforward, no-fuss task manager perfect for daily planning, shopping lists, or tracking small project goals. Stay on top of your work and manage your life with this convenient and persistent to-do list utility.',
    icon: <MiscIcon />,
    component: React.lazy(() => import('../pages/misc/TodoList')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['misc', 'todo', 'list', 'tasks', 'organizer'],
    category: 'Misc'
  },
  {
    path: '/random-name-generator',
    name: 'Random Name Generator',
    title: 'Random Name Generator - Fake Name Generator | DiceTools',
    description: 'Generate random first and last names for any purpose.',
    seoDescription: 'Create random names instantly with our free Random Name Generator. This tool is perfect for authors seeking character names, developers needing placeholder data for testing, or anyone who needs a random name for a project or game. With a single click, it generates a common first and last name combination. The generator is simple, fast, and works directly in your browser, offering an endless supply of names for your creative and technical needs. Get a new name every time you click, with no installation required. Find your next great name with this handy utility.',
    icon: <MiscIcon />,
    component: React.lazy(() => import('../pages/misc/RandomNameGenerator')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['misc', 'random', 'name', 'generator', 'character', 'fake'],
    category: 'Misc'
  },
  {
    path: '/random-number-generator',
    name: 'Random Number Generator',
    title: 'Random Number Generator (RNG) Online | DiceTools',
    description: 'Generate a random number within a custom range.',
    seoDescription: 'Generate a truly random number within any range you specify with our free online Random Number Generator (RNG). Simply set a minimum and maximum value, and our tool will instantly produce a random integer within that range, inclusive. This is perfect for games, contests, making decisions, or any situation where an unbiased random result is needed. The process is transparent and performed locally in your browser. Fast, free, and straightforward, this tool is your go-to solution for all your random number generation needs. No installation is required.',
    icon: <MiscIcon />,
    component: React.lazy(() => import('../pages/misc/RandomNumberGenerator')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['misc', 'random', 'number', 'generator', 'rng'],
    category: 'Misc'
  },
  {
    path: '/clipboard-manager',
    name: 'Clipboard Manager',
    title: 'Simple Clipboard Manager - Session History | DiceTools',
    description: 'A simple, session-based history of text you copy on this page.',
    seoDescription: 'Keep track of text you have recently copied with our simple online Clipboard Manager. This tool provides a session-based history, allowing you to manage and reuse multiple text snippets without losing them. Please note, due to browser security limitations, this tool can only track text copied from within this tool itself. It serves as a handy scratchpad for organizing temporary data during a single session. Perfect for writers and developers who need to juggle multiple pieces of information. Organize your temporary clipboard history easily with this browser-based utility.',
    icon: <MiscIcon />,
    component: React.lazy(() => import('../pages/misc/ClipboardManager')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['misc', 'clipboard', 'history', 'manager', 'copy', 'paste'],
    category: 'Misc'
  },
  {
    path: '/morse-code-translator',
    name: 'Morse Code Translator',
    title: 'Morse Code Translator Online | DiceTools',
    description: 'Translate text to Morse code and Morse code back to text.',
    seoDescription: 'Decode and encode messages with our free online Morse Code Translator. This tool provides instant, two-way translations between English text and Morse code. It’s a fun utility for learning this historic communication method, solving puzzles, or sending secret messages to friends. Simply type your text to see the corresponding dits and dahs, or enter Morse code to reveal the hidden message. The interface is clean and straightforward, providing real-time conversions as you type. Explore the world of Morse code with this handy and educational translation tool.',
    icon: <MiscIcon />,
    component: React.lazy(() => import('../pages/misc/MorseCodeTranslator')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['misc', 'morse', 'code', 'translator', 'decoder', 'encoder'],
    category: 'Misc'
  },
  {
    path: '/time-zone-converter',
    name: 'Time Zone Converter',
    title: 'Time Zone Converter - World Clock | DiceTools',
    description: 'Quickly convert the time between different global time zones.',
    seoDescription: 'Effortlessly coordinate across the globe with our free online Time Zone Converter. This tool is essential for anyone scheduling international meetings, working with remote teams, or planning travel. Simply select your local time zone and the time zone you want to convert to, and our tool will display the current time in both locations. It helps you avoid confusion and stay on schedule. Get accurate and reliable time conversions instantly with this simple and easy-to-use world clock converter. No installation required for this handy utility.',
    icon: <MiscIcon />,
    component: React.lazy(() => import('../pages/misc/TimeZoneConverter')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['misc', 'time', 'zone', 'converter', 'world clock', 'gmt'],
    category: 'Misc'
  },
  {
    path: '/ip-info-lookup',
    name: 'IP Info Lookup',
    title: 'IP Address Lookup - Geolocation Info | DiceTools',
    description: 'Get geolocation and network information for any IP address.',
    seoDescription: 'Find detailed geolocation and network information for any IP address with our free online IP Info Lookup tool. This utility can provide the city, region, country, and ISP associated with an IP address. It’s a valuable tool for cybersecurity professionals, network administrators, and anyone curious about the origin of web traffic. Our tool uses a mock database for demonstration, but it illustrates how you can quickly retrieve and analyze IP data. Simply enter an IP address and get instant results. Investigate and understand IP addresses with ease.',
    icon: <MiscIcon />,
    component: React.lazy(() => import('../pages/misc/IpInfoLookup')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['misc', 'ip', 'info', 'lookup', 'geolocation', 'network'],
    category: 'Misc'
  },
  {
    path: '/calculator',
    name: 'Calculator',
    title: 'Online Calculator - Free & Simple | DiceTools',
    description: 'A simple online calculator for your everyday math needs.',
    seoDescription: 'Perform basic arithmetic with our clean and simple online Calculator. This tool is perfect for quick calculations when you don\'t have a physical calculator on hand. It features a user-friendly interface with large buttons that work great on both desktop and mobile devices. It handles addition, subtraction, multiplication, division, and percentage calculations. Whether you are balancing a budget or helping with homework, our calculator is always just a click away. Get instant and accurate answers to your everyday math problems without any required installation.',
    icon: <MiscIcon />,
    component: React.lazy(() => import('../pages/misc/Calculator')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['misc', 'calculator', 'math', 'arithmetic'],
    category: 'Misc'
  },
  {
    path: '/binary-translator',
    name: 'Binary Translator',
    title: 'Binary Code Translator - Text to Binary | DiceTools',
    description: 'Translate text to binary code and binary back to text.',
    seoDescription: 'Easily translate text into binary code and decode binary back to plain text with our free online Binary Translator. This tool is a great resource for computer science students and programmers who want to understand how text is represented at a low level. Simply type your message to see its binary equivalent, or paste a binary string to reveal its hidden message. The conversions happen in real-time as you type. All translation is done securely in your browser. Decode and encode binary effortlessly with this powerful and educational tool.',
    icon: <MiscIcon />,
    component: React.lazy(() => import('../pages/misc/BinaryTranslator')) as React.LazyExoticComponent<React.FC<{ tool: ToolData }>>,
    keywords: ['misc', 'binary', 'translator', 'text', 'decoder', 'encoder'],
    category: 'Misc'
  },
];

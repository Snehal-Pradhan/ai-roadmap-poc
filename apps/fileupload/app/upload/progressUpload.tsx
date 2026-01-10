'use client';

import { useEffect, useState } from 'react';
import {
  formatBytes,
  useFileUpload,
  type FileWithPreview,
} from '@/hooks/use-file-upload';
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  TriangleAlert,
  UploadIcon,
  XIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

import { AnimatePresence, motion } from 'framer-motion';

interface FileUploadItem extends FileWithPreview {
  progress: number;
  status: 'uploading' | 'completed' | 'error';
}

interface ProgressUploadProps {
  maxFiles?: number;
  maxSize?: number;
  accept?: string;
  multiple?: boolean;
  className?: string;
  onFilesChange?: (files: FileWithPreview[]) => void;
  simulateUpload?: boolean;
}

export default function ProgressUpload({
  maxFiles = 1,
  maxSize = 5 * 1024 * 1024, // 5MB
  accept = '.pdf,.docx,.md',
  multiple = false,
  className,
  onFilesChange,
  simulateUpload = true,
}: ProgressUploadProps) {
  const [uploadFiles, setUploadFiles] = useState<FileUploadItem[]>([]);

  const [
    { isDragging, errors },
    {
      removeFile,
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      getInputProps,
    },
  ] = useFileUpload({
    maxFiles,
    maxSize,
    accept,
    multiple,
    onFilesChange: (newFiles) => {
      
      const newUploadFiles = newFiles.map((file) => {
      
        const existingFile = uploadFiles.find((existing) => existing.id === file.id);

        if (existingFile) {
    
          return {
            ...existingFile,
            ...file, 
          };
        } else {
        
          return {
            ...file,
            progress: 0,
            status: 'uploading' as const,
          };
        }
      });
      setUploadFiles(newUploadFiles);
      onFilesChange?.(newFiles);
    },
  });

  // Simulate upload progress
  useEffect(() => {
    if (!simulateUpload || uploadFiles.length === 0) return;

    const interval = setInterval(() => {
      setUploadFiles((prev) =>
        prev.map((file) => {
          if (file.status !== 'uploading') return file;

          const increment = Math.random() * 15 + 10; // 10-25% increment
          const newProgress = Math.min(file.progress + increment, 100);

          // Complete when progress reaches 100%
          if (newProgress >= 100) {
            return {
              ...file,
              progress: 100,
              status: 'completed' as const,
            };
          }

          return {
            ...file,
            progress: newProgress,
          };
        }),
      );
    }, 400);

    return () => clearInterval(interval);
  }, [simulateUpload, uploadFiles.length]);


  const removeUploadFile = (fileId: string) => {
    setUploadFiles((prev) => prev.filter((file) => file.id !== fileId));
    removeFile(fileId);
  };


  const currentFile = uploadFiles[0];

  return (
    <div className={cn('w-full mx-auto max-w-lg', className)}>
      <AnimatePresence mode="wait">
        {!currentFile ? (
          <motion.div
            key="upload-area"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className={cn(
              'relative overflow-hidden group rounded-[2rem] border border-dashed p-10 text-center transition-all duration-500 ease-in-out',
              isDragging 
                ? 'border-primary/50 shadow-[0_0_60px_-15px_rgba(var(--primary),0.15)] bg-primary/1' 
                : 'border-muted-foreground/15 hover:border-muted-foreground/30 hover:shadow-2xl hover:shadow-primary/2',
            )}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <input {...getInputProps()} className="sr-only" />

            <div className="flex flex-col items-center gap-6 relative z-10">
              <motion.div
                layout
                className={cn(
                  'flex h-20 w-20 items-center justify-center rounded-2xl transition-all duration-500 ease-out bg-muted text-muted-foreground',
                  isDragging ? 'scale-105 bg-muted/80' : 'group-hover:scale-105 group-hover:bg-muted/80',
                )}
              >
                <UploadIcon className="h-10 w-10" />
              </motion.div>

              <div className="space-y-3">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground/80">
                  Upload your CV
                </h3>
                <p className="text-sm text-muted-foreground max-w-[280px] mx-auto leading-relaxed">
                  Drag and drop your <span className="text-foreground font-semibold group-hover:text-primary/70 transition-colors">PDF, DOCX</span> or <span className="text-foreground font-semibold group-hover:text-primary/70 transition-colors">MD</span> files here
                </p>
                <div className="flex items-center justify-center gap-3 pt-4">
                  <span className="h-px w-6 bg-muted-foreground/10" />
                  <p className="text-xs font-bold text-muted-foreground/50 uppercase tracking-[0.2em]">
                    Max size: 5MB
                  </p>
                  <span className="h-px w-6 bg-muted-foreground/10" />
                </div>
              </div>

              <Button 
                onClick={openFileDialog}
                variant="secondary"
                size="lg"
                className="rounded-lg h-11 px-8 text-sm font-semibold bg-zinc-100 text-zinc-900 border border-zinc-200/50 shadow-sm hover:bg-zinc-200 hover:border-zinc-300/50 transition-all duration-300"
              >
                Browse Files
              </Button>
            </div>

            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ 
                x: '100%', 
                opacity: [0, 0.15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 4
              }}
              className="absolute inset-0 pointer-events-none z-0"
              style={{
                background: 'linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.7) 50%, transparent 65%)',
                width: '150%',
              }}
            />

          
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-primary/1 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/3 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          </motion.div>
        ) : (
          <motion.div
            key="file-card"
            layout
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.19, 1, 0.22, 1],
            }}
          >
            <motion.div 
              layout
              className="relative overflow-hidden rounded-2xl border border-border/40 bg-zinc-50/50 backdrop-blur-2xl p-4 shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all duration-500 hover:bg-zinc-100/60 hover:border-primary/10 group/card"
            >
             
              <motion.div layout className="absolute top-3 right-3">
                <Button
                  onClick={() => removeUploadFile(currentFile.id)}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-lg text-muted-foreground/40 hover:text-destructive hover:bg-destructive/10 transition-all duration-300 active:scale-90"
                >
                  <XIcon className="h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div layout className="flex flex-col items-start justify-center text-left">
                <motion.div layout className="space-y-1">
                  <motion.p 
                    layoutId="file-name"
                    className="text-base font-bold tracking-tight pr-10"
                  >
                    {currentFile.file.name}
                  </motion.p>
                  
                  <motion.div layout className="flex items-center gap-2 text-xs font-semibold text-muted-foreground/40 tracking-tight">
                    <span>{formatBytes(currentFile.file.size)}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/20" />
                    <span className={cn(
                      "transition-colors duration-500",
                      currentFile.status === 'completed' ? "text-success/60" : 
                      currentFile.status === 'error' ? "text-destructive" : 
                      "text-primary/60"
                    )}>
                      {currentFile.status.charAt(0).toUpperCase() + currentFile.status.slice(1)}
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
              <AnimatePresence mode="wait">
                {currentFile.status === 'uploading' && (
                  <motion.div 
                    layout
                    key="progress"
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="w-full space-y-2.5"
                  >
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/30 pr-1">
                      <span>Uploading</span>
                      <span className="text-primary/50">{Math.round(currentFile.progress)}%</span>
                    </div>
                    <div className="h-1 rounded-full bg-muted/20 overflow-hidden relative">
                      <motion.div 
                        className="absolute inset-y-0 left-0 bg-linear-to-r from-primary to-primary/40"
                        initial={{ width: 0 }}
                        animate={{ width: `${currentFile.progress}%` }}
                        transition={{ type: 'spring', damping: 20, stiffness: 60 }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {errors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-8"
          >
            <Alert variant="destructive" className="rounded-2xl border-destructive/10 bg-destructive/3 py-4 px-5 backdrop-blur-sm">
              <AlertIcon>
                <TriangleAlert className="h-4 w-4" />
              </AlertIcon>
              <AlertContent>
                <AlertTitle className="text-sm font-bold text-destructive/90">Upload rejected</AlertTitle>
                <AlertDescription className="text-xs font-medium opacity-70 mt-0.5">
                  {errors.map((error, index) => (
                    <p key={index}>{error}</p>
                  ))}
                </AlertDescription>
              </AlertContent>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

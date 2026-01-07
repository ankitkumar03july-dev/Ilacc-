import { useCallback, useState } from "react";
import { Upload, X, FileText, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  id: string;
  accept?: string;
  maxSize?: number; // in MB
  onFileChange: (file: File | null) => void;
  value?: File | null;
  className?: string;
}

const FileUpload = ({
  id,
  accept = ".pdf,.jpg,.jpeg,.png",
  maxSize = 10,
  onFileChange,
  value,
  className,
}: FileUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFile = useCallback(
    (file: File | null) => {
      setError(null);

      if (!file) {
        setPreview(null);
        onFileChange(null);
        return;
      }

      // Validate file size
      if (file.size > maxSize * 1024 * 1024) {
        setError(`File size must be less than ${maxSize}MB`);
        return;
      }

      // Validate file type
      const acceptedTypes = accept.split(",").map((t) => t.trim().toLowerCase());
      const fileExtension = `.${file.name.split(".").pop()?.toLowerCase()}`;
      const isAccepted = acceptedTypes.some(
        (type) =>
          type === fileExtension ||
          (type.includes("/") && file.type.match(type.replace("*", ".*")))
      );

      if (!isAccepted) {
        setError(`Invalid file type. Accepted: ${accept}`);
        return;
      }

      // Generate preview for images
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreview(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setPreview(null);
      }

      onFileChange(file);
    },
    [accept, maxSize, onFileChange]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);

      const file = e.dataTransfer.files?.[0];
      if (file) {
        handleFile(file);
      }
    },
    [handleFile]
  );

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        handleFile(file);
      }
    },
    [handleFile]
  );

  const handleRemove = useCallback(() => {
    setPreview(null);
    setError(null);
    onFileChange(null);
  }, [onFileChange]);

  const isImage = value?.type.startsWith("image/");

  return (
    <div className={cn("space-y-2", className)}>
      {value ? (
        <div className="relative border border-border rounded-lg p-4 bg-muted/30">
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 p-1 rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/80 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-4">
            {isImage && preview ? (
              <img
                src={preview}
                alt="Preview"
                className="h-20 w-20 object-cover rounded-lg"
              />
            ) : (
              <div className="h-20 w-20 bg-muted rounded-lg flex items-center justify-center">
                <FileText className="h-8 w-8 text-muted-foreground" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground truncate">{value.name}</p>
              <p className="text-sm text-muted-foreground">
                {(value.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => document.getElementById(id)?.click()}
          className={cn(
            "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors",
            isDragging
              ? "border-primary bg-primary/5"
              : "border-border hover:bg-muted/30 hover:border-muted-foreground/50"
          )}
        >
          <input
            type="file"
            id={id}
            accept={accept}
            onChange={handleInputChange}
            className="hidden"
          />
          <div className="flex flex-col items-center gap-2">
            {isDragging ? (
              <ImageIcon className="h-10 w-10 text-primary" />
            ) : (
              <Upload className="h-10 w-10 text-muted-foreground" />
            )}
            <div>
              <p className="font-medium text-foreground">
                {isDragging ? "Drop file here" : "Click or drag to upload"}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Max {maxSize}MB • {accept.replace(/\./g, "").toUpperCase()}
              </p>
            </div>
          </div>
        </div>
      )}

      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  );
};

export default FileUpload;

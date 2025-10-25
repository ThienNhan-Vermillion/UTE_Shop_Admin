'use client';

import React, { useState, useRef } from 'react';

interface ImageUploadProps {
  onImagesChange: (images: File[]) => void;
  maxImages?: number;
  existingImages?: string[];
  onRemoveExistingImage?: (index: number) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onImagesChange,
  maxImages = 3,
  existingImages = [],
  onRemoveExistingImage,
}) => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    
    // Kiểm tra số lượng ảnh
    const totalImages = existingImages.length + selectedImages.length + files.length;
    if (totalImages > maxImages) {
      alert(`Chỉ được phép tải lên tối đa ${maxImages} ảnh`);
      return;
    }

    // Kiểm tra định dạng file
    const validFiles = files.filter(file => {
      if (!file.type.startsWith('image/')) {
        alert(`File ${file.name} không phải là hình ảnh`);
        return false;
      }
      if (file.size > 5 * 1024 * 1024) { // 5MB
        alert(`File ${file.name} quá lớn (tối đa 5MB)`);
        return false;
      }
      return true;
    });

    const newSelectedImages = [...selectedImages, ...validFiles];
    setSelectedImages(newSelectedImages);

    // Tạo preview URLs
    const newPreviewUrls = validFiles.map(file => URL.createObjectURL(file));
    setPreviewUrls([...previewUrls, ...newPreviewUrls]);

    onImagesChange(newSelectedImages);

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeImage = (index: number) => {
    const newSelectedImages = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(newSelectedImages);

    // Revoke URL để giải phóng memory
    URL.revokeObjectURL(previewUrls[index]);
    const newPreviewUrls = previewUrls.filter((_, i) => i !== index);
    setPreviewUrls(newPreviewUrls);

    onImagesChange(newSelectedImages);
  };

  const removeExistingImage = (index: number) => {
    if (onRemoveExistingImage) {
      onRemoveExistingImage(index);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const totalImages = existingImages.length + selectedImages.length;
  const canAddMore = totalImages < maxImages;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-700">
          Hình ảnh sản phẩm ({totalImages}/{maxImages})
        </label>
        {canAddMore && (
          <button
            type="button"
            onClick={openFileDialog}
            className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            <i className="fas fa-plus mr-1"></i>
            Thêm ảnh
          </button>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Existing Images */}
      {existingImages.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm text-gray-600">Ảnh hiện tại:</p>
          <div className="grid grid-cols-3 gap-2">
            {existingImages.map((imageUrl, index) => (
              <div key={`existing-${index}`} className="relative group">
                <img
                  src={imageUrl}
                  alt={`Existing ${index + 1}`}
                  className="w-full h-24 object-cover rounded border"
                />
                <button
                  type="button"
                  onClick={() => removeExistingImage(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <i className="fas fa-times text-xs"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* New Images Preview */}
      {previewUrls.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm text-gray-600">Ảnh mới:</p>
          <div className="grid grid-cols-3 gap-2">
            {previewUrls.map((url, index) => (
              <div key={`new-${index}`} className="relative group">
                <img
                  src={url}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-24 object-cover rounded border"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <i className="fas fa-times text-xs"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Upload Area */}
      {canAddMore && (
        <div
          onClick={openFileDialog}
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 cursor-pointer transition-colors"
        >
          <i className="fas fa-cloud-upload-alt text-3xl text-gray-400 mb-2"></i>
          <p className="text-sm text-gray-600">
            Nhấp để chọn ảnh hoặc kéo thả ảnh vào đây
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Hỗ trợ: JPG, PNG, GIF (tối đa 5MB mỗi ảnh)
          </p>
        </div>
      )}

      {totalImages === 0 && (
        <div className="text-center py-8 text-gray-500">
          <i className="fas fa-image text-4xl mb-2"></i>
          <p>Chưa có ảnh nào được chọn</p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;

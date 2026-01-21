export const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "products_unsigned");

    const res = await fetch(
        "https://api.cloudinary.com/v1_1/dw10tfkah/image/upload",
        {
            method: "POST",
            body: formData,
        }
    );

    const data = await res.json();

    if (!res.ok) {
        console.error("Cloudinary error:", data);
        throw new Error(data?.error?.message || "Cloudinary upload failed");
    }

    return {
        url: data.secure_url,
        publicId: data.public_id,
    };
};
